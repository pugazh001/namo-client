const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pugazhenthi27s@gmail.com',
    pass: 'laoq yrgu mikx nina'
  }
});

// Email template
const createEmailTemplate = (name, email, message) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .info-box {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid rgb(30, 58, 138);
        }
        .label {
          font-weight: bold;
          color: rgb(30, 58, 138);
          margin-bottom: 5px;
        }
        .value {
          color: #555;
          margin-bottom: 15px;
        }
        .message-box {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0;">Namodot IT Solutions</p>
      </div>
      <div class="content">
        <div class="info-box">
          <div class="label">👤 Name:</div>
          <div class="value">${name}</div>
          
          <div class="label">📧 Email:</div>
          <div class="value">${email}</div>
        </div>
        
        <div class="message-box">
          <div class="label">💬 Message:</div>
          <div class="value" style="white-space: pre-wrap;">${message}</div>
        </div>
        
        <div class="footer">
          <p>This email was sent from your Namodot IT Solutions contact form</p>
          <p>Received on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }

  try {
    // Email options
    const mailOptions = {
      from: 'pugazhenthi27s@gmail.com',
      to: 'namodot01@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: createEmailTemplate(name, email, message),
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
