import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";

const findLessonId = async(req,res)=>{
    const id = req.query.Id;
    let lesson = await Lesson.findById(id);
    res.status(200).json({lesson});
    
    }

export default connectedDb(findLessonId);
