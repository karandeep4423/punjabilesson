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
    from: '"Punjabi Lesson" <bachiwind3@gmail.com>',
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
    const { email, subject, name, slot } = req.body;
    subject = "Lesson Cancelled";
    const html = `<h1>Lesson Cancelled</h1>
      <p>Dear ${name},</p>
      <p>We're sorry to hear that you had to cancel your lesson on ${slot}, but we understand that sometimes unexpected events can happen. We're glad that you let us know in advance, so that we can make the necessary arrangements.</p>
      <p>We hope that you will consider rescheduling your lesson at a later time when your schedule allows. We'd love to continue helping you learn and grow in your language studies.</p>
      <p>Best regards,</p>
      <p>Punjabi Lesson</p>`;
    const response = await sendMail(
      [email, "bachiwind7@gmail.com"],
      subject,
      "",
      html
    );
    return response.success;
  } catch (err) {
    return response.err;
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
      const emailResponse = await sendEmail(req, res);
      return res
        .status(200)
        .json({ message: "success", result, emailResponse });
    } catch (err) {
      return res.status(500).json({ error: "Something went wrong", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
