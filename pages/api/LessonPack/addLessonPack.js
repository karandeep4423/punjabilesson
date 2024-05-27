import connectedDb from "@/middleware/mongodb";
import LessonPack from "@/modals/LessonPack";
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
    const { email } = req.body;
    const subject = "Pack of Five Hour Lessons Purchased";
    const html = `<h1>Pack of Five Hour Lessons Purchased</h1>
    <p>Dear ${req.body.name.firstName + "  " + req.body.name.lastName},</p>
    <p>Congratulations on purchasing a pack of five hour lessons! We're excited to help you take your studies to the next level.</p>
    <p>Your payment <strong>${
      req.body.amount
    }$</strong> has been successfully processed and your pack of five hour lessons is now available. To book your lessons, simply go to booking page and click already bought pack  and select the dates and times that work best for you.</p>
    <p>If you have any questions or concerns about your pack of five hour lessons, please don't hesitate to get in touch with us at [Your Contact Information]. We're here to help.</p>
    <p>We're looking forward to helping you achieve your language goals and hope that you enjoy your pack of five hour lessons.</p>
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
    return err;
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
