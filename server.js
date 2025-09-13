const express = require('express');
const path = require('path');
const { sendEmail } = require('./utils/replitmail');
const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy for rate limiting in production
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
// Serve static assets from assets directory only
app.use('/assets', express.static('assets'));

// Using Replit Mail integration from utils/replitmail.js

// Simple rate limiting
const rateLimit = new Map();

// API endpoint for sending contact form emails
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, subject, message, honeypot } = req.body;
        
        // Honeypot check (basic spam protection)
        if (honeypot) {
            return res.status(400).json({ success: false, error: 'Invalid submission' });
        }
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required' });
        }
        
        if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 2000) {
            return res.status(400).json({ success: false, error: 'Field too long' });
        }
        
        // Basic rate limiting (per IP)
        const clientIP = req.ip || req.connection.remoteAddress;
        const now = Date.now();
        const lastRequest = rateLimit.get(clientIP);
        
        if (lastRequest && now - lastRequest < 60000) { // 1 minute cooldown
            return res.status(429).json({ success: false, error: 'Please wait before sending another message' });
        }
        
        rateLimit.set(clientIP, now);
        
        // Fixed recipient - your email address
        const CONTACT_EMAIL = 'mardy.cse@gmail.com';
        
        const result = await sendEmail({
            to: CONTACT_EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });
        
        console.log('Email sent successfully:', result);
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Check if it's a token authentication error
        if (error.message.includes("authentication token")) {
            res.status(503).json({ 
                success: false, 
                error: 'Email service temporarily unavailable. Please contact me directly at mardy.cse@gmail.com' 
            });
        } else {
            res.status(500).json({ 
                success: false, 
                error: 'Failed to send message. Please try again or contact me directly at mardy.cse@gmail.com' 
            });
        }
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Cache control headers to prevent caching issues
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
});