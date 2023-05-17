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
      Source: "hindipunjabitutor@gmail.com",
      Destination: {
        ToAddresses: [req.body.email],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: " Lesson Rescheduled",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<h1>Lesson Rescheduled</h1>
            <p>Dear ${req.body.name},</p>
            <p>We're writing to confirm that you have successfully rescheduled your lesson with on <span><h1>${req.body.slot} ${req.body.slotTimezone}</h1></span>. We're glad to see that you're taking control of your learning experience and making it work for your schedule.</p>
            <p>If you have any questions or concerns about this rescheduled lesson, please don't hesitate to get in touch with us at bachiwind3@gmail.com . We're here to help.</p>
            <p>We're looking forward to seeing you at your rescheduled lesson and hope that you continue to have a great learning experience with us.</p>
            <p>Best regards,</p>
            <p>Punjabi School</p>`
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
