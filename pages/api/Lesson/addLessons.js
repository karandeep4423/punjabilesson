import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";
import nodemailer from "nodemailer";

const sendMail = async (to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bachiwind3@gmail.com",
      pass: process.env.NEXT_PUBLIC_GMAIL || "", // Ensure you have this environment variable set
    },
  });

  const mailOptions = {
    from: '"Photo Grid" <bachiwind3@gmail.com>',
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (err) {
    return { success: false, error: err };
  }
};


const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: [req.body.email,'bachiwind7@gmail.com'], // Change to your recipient
      from: "bachiwind7@gmail.com", // Change to your verified sender
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
    const response = await sendMail(
      [email, "bachiwind7@gmail.com"],
      subject,
      "",
      html
    );
    return response.success;
  } catch (err) {
    return err;
  }
};

const handler = async (req, res) => {
  if (req.method == "POST") {
    let lessons = new Lesson(req.body);
    try {
      await lessons.save();
      const emailResponse = await sendEmail(req, res);      
      res.status(200).json({ message: "success",lessons,emailResponse });
    } catch (err) {
      res.status(400).json({ message: "Error saving lesson", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
