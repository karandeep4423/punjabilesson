// import { connectToDatabase } from "@/lib/mongodb";

// export default async function handler(req, res) {
//   let { db } = await connectToDatabase();

//   const lessons = await db.collection("lessons").find().toArray();

//   res.status(200).json({ lessons });
// }

import connectedDb from "@/lib/mongodb";
import Lesson from "@/modals/Lesson";


const handler = async(req,res)=>{
  const email = "bachiwind3@gmail.com";
  let lesson = await Lesson.find({ email });
  res.status(200).json({ lesson });

}

export default connectedDb(handler);
