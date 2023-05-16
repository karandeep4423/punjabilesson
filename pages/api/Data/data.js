import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  let { db } = await connectToDatabase();

  const lessons = await db.collection("lessons").find().toArray();

  res.status(200).json({ lessons });
}
