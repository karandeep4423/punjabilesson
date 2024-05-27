import nodemailer from 'nodemailer';
import connectedDb from '@/middleware/mongodb';

// Send mail function
const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'lessonpunjabi@gmail.com',
      pass: process.env.NEXT_PUBLIC_GMAIL, // Ensure this environment variable is set
    },
  });

  const mailOptions = {
    from: '"Punjabi Lesson" <lessonpunjabi@gmail.com>',
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Error sending email:', err);
    throw new Error('Error sending email');
  }
};

// API route handler
const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, name, phone, message } = req.body;

      if (!email || !name || !phone || !message) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      const subject = 'Student Enquiry from Punjabi Lesson';
      const html = `<h1>Student Enquiry</h1>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>Message: ${message}</p>
        <p>Best regards,</p>
        <p>Punjabi Lesson</p>`;

      await sendMail([email, "karanhanju9696@gmail.com"], subject, html);

      return res.status(200).json({
        success: true,
        message: 'Mail sent successfully',
      });
    } catch (error) {
      console.log("reponse",error)
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }
};

export default connectedDb(handler);
