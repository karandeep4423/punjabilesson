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
      subject: "Booking Confirmed",
      html: `<h1>Booking Confirmed</h1>
      <p>Dear ${req.body.name}</p>
      <p>
        Thank you for booking a lesson with Punjabi Lesson! We're excited to have you join us for this
        lesson.
      </p>
      <p>
        This email is to confirm your booking, and the details of your
        lesson are as follows:
      </p>
      <ul>
        <li>Lesson Type: ${req.body.lessonType}</li>
        <li>Date and Time: ${req.body.slot}</li>
        <li>Timezone: ${req.body.slotTimezone}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      <p>
        If you have any questions or concerns about this class, please
        feel free to contact us at bachiwind3@gmail.com . We'll
        be happy to help you out.
      </p>
      <p>
        We look forward to seeing you in class and hope that you have
        a great learning experience with us!
      </p>
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
    let lessons = new Lesson(req.body);
    try {
      await lessons.save();
      await sendEmail(req, res);
      res.status(200).json({ message: "success",lessons,emailResMess: sentMailRes });
    } catch (err) {
      res.status(400).json({ message: "Error saving lesson", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
