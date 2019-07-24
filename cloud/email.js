// SENDGRID API TESTING
const config = require("../config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(config.SENDGRID_API_KEY);

const msg = {
  // to: "test@DevInternCareerSlayer.com",
  to: "rudson.augustin@gmail.com",
  from: "test@DevInternCareerSlayer.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};

sgMail.send(msg);
