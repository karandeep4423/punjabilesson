import LessonPack  from "@/modals/LessonPack";
import connectedDb from "@/middleware/mongodb";

const findLesson = async(req,res)=>{
    const email = req.query.email;
    let lesson = await LessonPack.find({email});
    res.status(200).json({lesson});
    
    }

export default connectedDb(findLesson);