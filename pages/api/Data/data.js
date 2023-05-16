// import { connectToDatabase } from "@/lib/mongodb";

// export default async function handler(req, res) {
//   let { db } = await connectToDatabase();

//   const lessons = await db.collection("lessons").find().toArray();

//   res.status(200).json({ lessons });
// }

import connectedDb from "@/lib/mongodb";
import Lesson from "@/modals/Lesson";


const handler = async(req,res)=>{
let lessons = await Lesson.find();
res.status(200).json({lessons});

}

export default connectedDb(handler);
