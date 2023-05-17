import mongoose from "mongoose";
const Schema = mongoose.Schema;

const lessonPackSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    amount: { type: String, required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.LessonPack || mongoose.model("LessonPack", lessonPackSchema);
