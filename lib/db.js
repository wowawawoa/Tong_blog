import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb+srv://wowawawoa:Oaui8Jr6S8TbzOoC@cluster0.quye6t3.mongodb.net/auth-demo?retryWrites=true&w=majority")

  return client;
}