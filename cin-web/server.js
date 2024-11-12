require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'porkbun', // or another service if not using Gmail
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'contact@cinnamonmvno.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));