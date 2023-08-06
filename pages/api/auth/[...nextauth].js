import NextAuth from "next-auth/next";
// import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email, name: user.name, image: user.image };
      },
    }),
  ],
};

export default NextAuth(authOptions);
