import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

let sentMailRes;

const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: [req.body.email,'bachiwind7@gmail.com'], // Change to your recipient
      from: "hindipunjabitutor@gmail.com", // Change to your verified sender
      subject: "Lesson Rescheduled",
      html: `<h1>Lesson Rescheduled</h1>
      <p>Dear ${req.body.name},</p>
      <p>We're writing to confirm that you have successfully rescheduled your lesson with on <span><h1>${req.body.slot} ${req.body.slotTimezone}</h1></span>. We're glad to see that you're taking control of your learning experience and making it work for your schedule.</p>
      <p>If you have any questions or concerns about this rescheduled lesson, please don't hesitate to get in touch with us at bachiwind3@gmail.com . We're here to help.</p>
      <p>We're looking forward to seeing you at your rescheduled lesson and hope that you continue to have a great learning experience with us.</p>
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
      const result = await Lesson.findByIdAndUpdate({ _id: req.body.id}, req.body, { new: true });
      await sendEmail(req, res);
      return res.status(200).json({ message: "success", result,emailResMessId: sentMailRes });
    } catch (err) {
      return res.status(500).json({ error: "Something went wrong",err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
