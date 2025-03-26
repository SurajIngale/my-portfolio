import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

// Initialize dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// Contact Form Route
app.post('/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
        return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Error sending message." });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
