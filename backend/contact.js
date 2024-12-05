const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mahi87331@gmail.com',
      pass: 'cheb pkzw qcvl jvsz',
    },
  });

  const mailOptions = {
    from: email,
    to: 'recipient-email@example.com',
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent: ' + info.response);
  });
});

module.exports = router;
