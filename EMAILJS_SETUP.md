# EmailJS Setup Guide

## Security Configuration

This implementation includes several security features to prevent spam and abuse:

### 1. Rate Limiting
- Maximum 3 attempts per minute per email address
- Prevents spam and abuse

### 2. Input Validation
- Email format validation
- Minimum length requirements for all fields
- Spam content detection

### 3. Data Sanitization
- Trims whitespace
- Limits field lengths
- Converts email to lowercase

## Setup Instructions

### 1. Get Your EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create an account or sign in
3. Go to **Email Services** and add your email service (Gmail, Outlook, etc.)
4. Go to **Email Templates** and create a template with ID: `template_f00uy1o`
5. Copy your **Service ID** and **Public Key**

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Email Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (Luis Henriquez)
- `{{reply_to}}` - Reply-to email (same as from_email)

### 4. Security Features

The implementation includes:
- ✅ Rate limiting (3 attempts per minute)
- ✅ Input validation and sanitization
- ✅ Spam detection
- ✅ XSS prevention
- ✅ Loading states and error handling
- ✅ Auto-reset messages

### 5. Testing

1. Start your development server
2. Fill out the contact form
3. Submit and check your email
4. Test rate limiting by submitting multiple times quickly

## Production Deployment

For production, make sure to:
1. Set the environment variables in your hosting platform
2. Test the contact form thoroughly
3. Monitor for any issues

## Troubleshooting

- **"Service ID not found"**: Check your EmailJS Service ID
- **"Template not found"**: Verify template ID is correct
- **"Rate limit exceeded"**: Wait 1 minute before trying again
- **"Invalid email"**: Check email format

## Security Notes

- Never expose your EmailJS Private Key
- The Public Key is safe to use in frontend code
- Rate limiting prevents abuse
- All inputs are validated and sanitized 