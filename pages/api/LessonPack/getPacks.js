import LessonPack from "@/modals/LessonPack";
import connectedDb from "@/middleware/mongodb";

const handler = async(req,res)=>{
let lessons = await LessonPack.find()
res.status(200).json({lessons});

}

export default connectedDb(handler);