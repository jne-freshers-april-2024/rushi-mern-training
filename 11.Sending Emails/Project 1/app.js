const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: process.env.host,
  port: process.env.port,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: process.env.auth,
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.from, // sender address
    to: process.env.to, // list of receivers
    subject: "Hello Rushi, This is just for testing purpose", // Subject line
    text: "Hi,", // plain text body
    html: "<b>Hello RK</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);