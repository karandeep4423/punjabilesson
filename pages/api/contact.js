import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: "karanhanju9696@gmail.com", // Change to your recipient
      from: "hindipunjabitutor@gmail.com", // Change to your verified sender
      subject: "Student Enquiry",
      html: `<h1>Student enquiry</h1>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Student email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <p>
       Message: ${req.body.message}
      </p>
      <p>Best regards,</p>
      <p>Punjabi Lesson</p>`,
    };
    await sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ status: "Ok" });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } catch (err) {
    res.status(400).json({ message: "somethod error", err });
  }
};

export default sendEmail;
