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
    console.log("mail data", req.body);
    const params = {
      Source: "hindipunjabitutor@gmail.com",
      Destination: {
        ToAddresses: [req.body.email],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "Booking Confirmed",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
                <h1>Booking Confirmed</h1>
                <p>Dear ${req.body.name}</p>
                <p>
                  Thank you for booking a lesson with Punjabi School! We're excited to have you join us for this
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
    let lessons = new Lesson(req.body);
    try {
      await lessons.save();
      await sendEmail(req, res);
      res
        .status(200)
        .json({ message: "success", lessons, emailResMessId: sentMailRes });
    } catch (err) {
      res.status(400).json({ message: "Error saving lesson", err });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectedDb(handler);
