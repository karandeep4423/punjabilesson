import mongoose from "mongoose";
import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";

const handler = async (req, res) => {
    if (req.method == "PUT") {
      try {
        const result = await Lesson.findByIdAndUpdate({ _id: req.body.id}, req.body, { new: true });
        return res.status(200).json({ message: "success", result });
      } catch (err) {
        return res.status(500).json({ error: "Something went wrong",err });
      }
    } else {
      res.status(404).json({ error: "This method is not allowed" });
    }
  };
  
  export default connectedDb(handler);