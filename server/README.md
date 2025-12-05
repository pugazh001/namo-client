# Namodot IT Solutions - Email Server

This is the backend server for handling contact form submissions and sending emails.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment Variables**
   The `.env` file is already configured with your Gmail credentials.

3. **Start the Server**
   
   For development (with auto-restart):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

4. **Server will run on:** `http://localhost:5000`

## API Endpoints

### POST `/api/send-email`
Sends an email with contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### GET `/api/health`
Health check endpoint to verify server is running.

## Email Configuration

- **From:** pugazhenthi27s@gmail.com
- **To:** namodot01@gmail.com
- **Service:** Gmail SMTP

## Features

- ✅ Beautiful HTML email template with gradient design
- ✅ Automatic timestamp on emails
- ✅ Reply-to functionality (replies go to the sender)
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation

## Important Notes

⚠️ **Gmail App Password:** The password used is a Gmail App Password, not your regular Gmail password. This is more secure and required for SMTP access.

⚠️ **Production Deployment:** When deploying to production, update the frontend API URL from `http://localhost:5000` to your production server URL.
