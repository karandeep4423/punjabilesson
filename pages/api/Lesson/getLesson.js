import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";

const handler = async (req, res) => {
  const email = req.query.email;
  try {
    let lesson = await Lesson.find({ email });
    res.status(200).json({ lesson });
  } catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
};

export default connectedDb(handler);
