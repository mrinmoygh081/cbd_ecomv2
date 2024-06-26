const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_MAIL_PW,
  },
});

// mailTransporter.sendMail(mailDetails, function (err, data) {
//   if (err) {
//     console.log("Error Occurs", err);
//   } else {
//     console.log("Email sent successfully");
//   }
// });

const SENDMAIL = async (mailDetails, callback) => {
  try {
    const info = await transporter.sendMail(mailDetails);
    callback(info);
  } catch (error) {
    console.error(error);
  }
};

module.exports = SENDMAIL;
