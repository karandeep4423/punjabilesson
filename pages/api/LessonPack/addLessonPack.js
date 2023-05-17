import connectedDb from "@/middleware/mongodb";
import * as AWS from "aws-sdk";
import LessonPack from "@/modals/LessonPack"

const awsConfig = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
};
const SES = new AWS.SES(awsConfig);

let sentMailRes;

const sendEmail = async (req, res) => {
  try {
    const params = {
      Source: "hindipunjabitutor@gmail.com",
      Destination: {
        ToAddresses: [req.body.email],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "Pack of Five Hour Lessons Purchased",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<h1>Pack of Five Hour Lessons Purchased</h1>
            <p>Dear ${req.body.name},</p>
            <p>Congratulations on purchasing a pack of five hour lessons! We're excited to help you take your studies to the next level.</p>
            <p>Your payment has been successfully processed and your pack of five hour lessons is now available. To book your lessons, simply go to booking page and click already bought pack  and select the dates and times that work best for you.</p>
            <p>If you have any questions or concerns about your pack of five hour lessons, please don't hesitate to get in touch with us at [Your Contact Information]. We're here to help.</p>
            <p>We're looking forward to helping you achieve your language goals and hope that you enjoy your pack of five hour lessons.</p>
            <p>Best regards,</p>
            <p>Punjabi School</p>`,
          },
        },
      },
    };
    const sentEmail = await SES.sendEmail(params).promise();
    return (sentMailRes = sentEmail.MessageId);
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
