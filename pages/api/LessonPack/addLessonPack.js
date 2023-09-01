import connectedDb from "@/middleware/mongodb";
import LessonPack from "@/modals/LessonPack"
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

let sentMailRes;

const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: [req.body.email,'bachiwind7@gmail.com'], // Change to your recipient
      from: "hindipunjabitutor@gmail.com", // Change to your verified sender
      subject: "Pack of Five Hour Lessons Purchased",
      html: `<h1>Pack of Five Hour Lessons Purchased</h1>
      <p>Dear ${req.body.name.firstName + '  ' + req.body.name.lastName},</p>
      <p>Congratulations on purchasing a pack of five hour lessons! We're excited to help you take your studies to the next level.</p>
      <p>Your payment <strong>${req.body.amount}$</strong> has been successfully processed and your pack of five hour lessons is now available. To book your lessons, simply go to booking page and click already bought pack  and select the dates and times that work best for you.</p>
      <p>If you have any questions or concerns about your pack of five hour lessons, please don't hesitate to get in touch with us at [Your Contact Information]. We're here to help.</p>
      <p>We're looking forward to helping you achieve your language goals and hope that you enjoy your pack of five hour lessons.</p>
      <p>Best regards,</p>
      <p>Punjabi Lesson</p>`,
    };
    const sentEmail = await sgMail.send(msg);
    return (sentMailRes = sentEmail);
  } catch (err) {
    return (sentMailRes = err);
  }
};
const handler = async (req, res) => {
  if (req.method == "POST") {
    let lessonPacks = new LessonPack(req.body);
    try {
      await lessonPacks.save();
      await sendEmail(req, res);
      res
        .status(200)
        .json({ message: "success", lessonPacks, emailResMessId: sentMailRes });
    } catch (err) {
      res.status(400).json({ message: "Error saving lesson", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
