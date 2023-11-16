const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Set the SendGrid API key
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

// Endpoint to send email
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to,
        from: 'your-email@example.com', // Replace with your verified sender email
        subject,
        text,
    };

    sgMail
    .send(msg)
    .then(() => {
        res.status(200).send('Email sent successfully');
    })
    .catch(error => {
        console.error('SendGrid Error:', error.response.body);
        res.status(500).send('Error sending email');
    });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
