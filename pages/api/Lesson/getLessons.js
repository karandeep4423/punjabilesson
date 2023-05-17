import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";


const handler = async(req,res)=>{
let lessons = await Lesson.find();
res.status(200).json({lessons});

}

export default connectedDb(handler);