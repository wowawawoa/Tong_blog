import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword, hashPassword } from "@/lib/auth";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // const session = await getServerSession(req, res, authOptions);
  console.log("change password session", session);
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  // verify old password
  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Invalid password." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password updated!" });
}

export default handler;
