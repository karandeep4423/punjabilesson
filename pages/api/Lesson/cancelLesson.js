import mongoose from "mongoose";
import Lesson from "@/modals/Lesson";
import connectedDb from "@/middleware/mongodb";
import * as AWS from "aws-sdk";

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
      Source: "bachiwind3@gmail.com",
      Destination: {
        ToAddresses: [req.body.email],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "Lesson Cancelled",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<h1>Lesson Cancelled</h1>
            <p>Dear ${req.body.name},</p>
            <p>We're sorry to hear that you had to cancel your lesson on ${req.body.slot}, but we understand that sometimes unexpected events can happen. We're glad that you let us know in advance, so that we can make the necessary arrangements.</p>
            <p>We hope that you will consider rescheduling your lesson at a later time when your schedule allows. We'd love to continue helping you learn and grow in your language studies.</p>
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
  if (req.method == "DELETE") {
    try {
      const result = await Lesson.findOneAndDelete({ _id: req.body.id}, req.body, { new: true });
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
