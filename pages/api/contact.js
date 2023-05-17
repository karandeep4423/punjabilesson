import * as AWS from "aws-sdk";

const awsConfig = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
};
const SES = new AWS.SES(awsConfig);


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
          Data: "Student enquiry",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
                <h1>Student enquiry</h1>
                <ul>
                  <li>Name: ${req.body.name}</li>
                  <li>Student email: ${req.body.email}</li>
                  <li>Phone: ${req.body.phone}</li>
                </ul>
                <p>
                 Message: ${req.body.message}
                </p>
                <p>Best regards,</p>
                <p>Punjabi School</p>`,
          },
        },
      },
    };
    const sentEmail = await SES.sendEmail(params).promise();
    res.status(200).json({message:"success",sentEmail});
  } catch (err) {
    res.status(400).json({message:"somethod error",err});
  }
};

export default sendEmail;