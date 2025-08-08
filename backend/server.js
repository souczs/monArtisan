const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, subject, message, artisanEmail } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'localhost', // Hôte de MailDev
    port: 1025,        // Port SMTP de MailDev
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  // Configuration de l'email
  const mailOptions = {
    from: `"${name}" <form-contact@monsite.com>`,
    to: artisanEmail,
    subject: `Nouveau message : ${subject}`,
    text: `Message de : ${name}\n\n${message}`
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      return res.status(500).send(error.toString());
    }
    console.log('Email envoyé avec succès ! ID:', info.messageId);
    res.status(200).send('Email envoyé avec succès !');
  });
});

app.listen(port);