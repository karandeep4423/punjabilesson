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
      user: "lessonpunjabi@gmail.com",
      pass: process.env.NEXT_PUBLIC_GMAIL || "", // Ensure you have this environment variable set
    },
  });

  const mailOptions = {
    from: '"Punjabi Lesson" <lessonpunjabi@gmail.com>',
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
  const { email, name, slot, slotTimezone } = req.body;

  const subject = "Lesson Rescheduled";
  const html = `
    <h1>Lesson Rescheduled</h1>
    <p>Dear ${name},</p>
    <p>We're writing to confirm that you have successfully rescheduled your lesson on <span><h1>${slot} ${slotTimezone}</h1></span>. We're glad to see that you're taking control of your learning experience and making it work for your schedule.</p>
    <p>If you have any questions or concerns about this rescheduled lesson, please don't hesitate to get in touch with us at lessonpunjabi@gmail.com. We're here to help.</p>
    <p>We're looking forward to seeing you at your rescheduled lesson and hope that you continue to have a great learning experience with us.</p>
    <p>Best regards,</p>
    <p>Punjabi Lesson</p>
  `;

  const response = await sendMail(
    [email, "karanhanju9696@gmail.com"],
    subject,
    "",
    html
  );

  if (response.success) {
    return response.info;
  } else {
    throw response.error;
  }
};

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const result = await Lesson.findByIdAndUpdate(
        { _id: req.body.id },
        req.body,
        { new: true }
      );
      const emailResponse = await sendEmail(req, res);
      return res
        .status(200)
        .json({ message: "success", result, emailResponse });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Something went wrong", details: err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
