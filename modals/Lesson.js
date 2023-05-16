import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const lessonSchema = new mongoose.Schema({
        email:{ type:String,required:true},
        name:{type:String,required:true},
        message:{type:String},
        slot:{type:String,required:true},
        slotTimezone:{type:String,required:true},
        lessonType:{type:String,required:true},
        LessonPackId:{type:Schema.Types.ObjectId,ref:"LessonPack"},
        lessonCompleted:{type:Boolean,required:true,default:false},
},{timestamps:true})

module.exports = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema);
