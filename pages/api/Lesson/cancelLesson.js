import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

let sentMailRes;

const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: [req.body.email, "bachiwind7@gmail.com"], // Change to your recipient
      from: "hindipunjabitutor@gmail.com", // Change to your verified sender
      subject: "Lesson Cancelled",
      html: `<h1>Lesson Cancelled</h1>
      <p>Dear ${req.body.name},</p>
      <p>We're sorry to hear that you had to cancel your lesson on ${req.body.slot}, but we understand that sometimes unexpected events can happen. We're glad that you let us know in advance, so that we can make the necessary arrangements.</p>
      <p>We hope that you will consider rescheduling your lesson at a later time when your schedule allows. We'd love to continue helping you learn and grow in your language studies.</p>
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
  if (req.method == "PUT") {
    try {
      const result = await Lesson.findOneAndDelete(
        { _id: req.body.id },
        req.body,
        { new: true }
      );
      await sendEmail(req, res);
      res
        .status(200)
        .json({ message: "success", result, emailResMessId: sentMailRes });
    } catch (err) {
      return res.status(500).json({ error: "Something went wrong", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
