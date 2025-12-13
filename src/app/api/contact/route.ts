import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Simple rate limiting
const rateLimitMap = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;
  
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter((time: number) => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again in 15 minutes.' },
        { status: 429 }
      );
    }

    // Check content type to determine how to parse the request
    const contentType = request.headers.get('content-type') || '';
    
    let name: string;
    let email: string;
    let purpose: string;
    let message: string;
    let attachmentFile: File | null = null;

    if (contentType.includes('application/json')) {
      // Handle JSON data (from ContactCTA without file)
      const body = await request.json();
      name = body.name;
      email = body.email;
      purpose = body.purpose;
      message = body.message;
    } else if (contentType.includes('multipart/form-data')) {
      // Handle FormData (from forms with file attachments)
      const formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      purpose = formData.get('purpose') as string;
      message = formData.get('message') as string;
      attachmentFile = formData.get('attachment') as File | null;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid content type.' },
        { status: 400 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const sanitizedName = sanitize(name);
    const sanitizedMessage = sanitize(message);
    const sanitizedPurpose = purpose ? sanitize(purpose) : 'General Inquiry';

    // Current date/time in Vancouver timezone
    const timestamp = new Date().toLocaleString('en-CA', { 
      timeZone: 'America/Vancouver',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Process attachment if exists
    let attachmentData: { content: string; filename: string; type: string; disposition: string } | null = null;
    if (attachmentFile) {
      const bytes = await attachmentFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');
      
      attachmentData = {
        content: base64,
        filename: attachmentFile.name,
        type: attachmentFile.type,
        disposition: 'attachment'
      };
    }

    // Rest of your email code remains the same...
    // Email to Codsphere team
    const companyEmail: {
      to: string | undefined;
      from: { email: string; name: string };
      replyTo: string;
      subject: string;
      text: string;
      html: string;
      attachments?: { content: string; filename: string; type: string; disposition: string }[];
    } = {
      to: process.env.COMPANY_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Codsphere Contact Form'
      },
      replyTo: email,
      subject: `New Contact Form: ${sanitizedPurpose} - from ${sanitizedName}`,
      text: `
New contact form submission from codsphere.ca

Name: ${sanitizedName}
Email: ${email}
Purpose: ${sanitizedPurpose}
Date: ${timestamp}
${attachmentFile ? `Attachment: ${attachmentFile.name}` : ''}

Message:
${sanitizedMessage}

--
Reply directly to this email to respond to ${sanitizedName}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: linear-gradient(135deg, #000000 0%, #333333 100%); 
      color: white; 
      padding: 30px; 
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .content { 
      background: #f7f9fc; 
      padding: 30px; 
      border-radius: 0 0 10px 10px;
      border: 1px solid #e1e4e8;
    }
    .field { 
      margin-bottom: 20px;
      background: white;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #000;
    }
    .label { 
      font-weight: 600; 
      color: #586069;
      margin-bottom: 5px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .value { 
      color: #24292e;
      font-size: 15px;
    }
    .message-box { 
      background: white; 
      padding: 20px; 
      border-radius: 8px;
      border-left: 4px solid #000;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer { 
      text-align: center; 
      margin-top: 30px; 
      font-size: 12px; 
      color: #586069;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
    }
    .reply-note {
      background: #fff3cd;
      border: 1px solid #ffc107;
      padding: 10px;
      border-radius: 5px;
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #856404;
    }
    .attachment-info {
      background: #e7f5ff;
      border: 1px solid #54b3d6;
      padding: 10px;
      border-radius: 5px;
      margin-top: 15px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">codsphere.ca</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${sanitizedName}</div>
      </div>
      
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value">
          <a href="mailto:${email}" style="color: #0366d6; text-decoration: none;">
            ${email}
          </a>
        </div>
      </div>
      
      <div class="field">
        <div class="label">Purpose</div>
        <div class="value">${sanitizedPurpose}</div>
      </div>
      
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          ${sanitizedMessage.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      ${attachmentFile ? `
        <div class="attachment-info">
          📎 <strong>Attachment:</strong> ${attachmentFile.name} (${(attachmentFile.size / 1024).toFixed(1)} KB)
        </div>
      ` : ''}
      
      <div class="reply-note">
        💡 <strong>Tip:</strong> Hit "Reply" to respond directly to ${sanitizedName}
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Received:</strong> ${timestamp}</p>
      <p>This email was sent from the Codsphere contact form</p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Add attachment if exists
    if (attachmentData) {
      companyEmail.attachments = [attachmentData];
    }

    // Auto-reply to customer (without attachment)
    const autoReplyEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Codsphere'
      },
      subject: `Thank you for contacting Codsphere`,
      text: `
Dear ${sanitizedName},

Thank you for reaching out to Codsphere. We have received your message and appreciate your interest in our services.

Our team will review your inquiry about "${sanitizedPurpose}" and get back to you within 24-48 business hours.

For your reference, here's a copy of your message:

${sanitizedMessage}

${attachmentFile ? `We have also received your attached file: ${attachmentFile.name}` : ''}

If you have any urgent matters, please don't hesitate to reach out to us directly at info@codsphere.ca.

Best regards,
The Codsphere Team

--
This is an automated response. Please do not reply to this email.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px;
    }
    .header { 
      background: linear-gradient(135deg, #000000 0%, #333333 100%); 
      color: white; 
      padding: 40px 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .content { 
      background: #ffffff; 
      padding: 40px 30px;
      border: 1px solid #e1e4e8;
      border-top: none;
      border-radius: 0 0 10px 10px;
    }
    .message-copy {
      background: #f7fafc;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #000;
    }
    .info-box {
      background: #e7f5ff;
      border: 1px solid #54b3d6;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .footer { 
      text-align: center; 
      margin-top: 40px; 
      font-size: 12px; 
      color: #586069;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
    }
    h1 { 
      margin: 0; 
      font-size: 28px; 
      font-weight: 600; 
    }
    p { 
      line-height: 1.6; 
      color: #24292e; 
    }
    ul {
      color: #24292e;
      line-height: 1.8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Codsphere!</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">
        We've received your message
      </p>
    </div>
    
    <div class="content">
      <p>Dear ${sanitizedName},</p>
      
      <p>Thank you for reaching out to <strong>Codsphere</strong>. We have received your message and appreciate your interest in our services.</p>
      
      <div class="info-box">
        <strong>📋 What happens next?</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>Our team will carefully review your inquiry</li>
          <li>We'll analyze your requirements for "${sanitizedPurpose}"</li>
          <li>You'll receive a detailed response within 24-48 business hours</li>
          <li>If urgent, email us directly at <a href="mailto:info@codsphere.ca" style="color: #0366d6;">info@codsphere.ca</a></li>
        </ul>
      </div>
      
      <p><strong>Your Message:</strong></p>
      <div class="message-copy">
        ${sanitizedMessage.replace(/\n/g, '<br>')}
      </div>
      
      ${attachmentFile ? `
        <p>✅ We have successfully received your attached file: <strong>${attachmentFile.name}</strong></p>
      ` : ''}
      
      <p>We look forward to helping you with your project and will be in touch soon!</p>
      
      <p>Best regards,<br>
      <strong>The Codsphere Team</strong></p>
    </div>
    
    <div class="footer">
      <p><strong>Codsphere</strong> - Your Partner in Digital Transformation</p>
      <p style="color: #a0aec0; font-size: 11px; margin-top: 10px;">
        This is an automated response. Please do not reply to this email.<br>
        For immediate assistance, contact us at info@codsphere.ca
      </p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Send both emails
    await sgMail.send(companyEmail);
    await sgMail.send(autoReplyEmail);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24-48 hours.'
    });

  } catch (error: unknown) {
    console.error('SendGrid Error:', error);
    
    // Log detailed error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Full error:', JSON.stringify((error as { response?: { body?: unknown } })?.response?.body || error, null, 2));
    }
    
    // Check for specific SendGrid errors
    if ((error as { code?: number })?.code === 403) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service configuration error. Please contact us directly at info@codsphere.ca' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly at info@codsphere.ca' 
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'Contact API is running',
    sendgrid: !!process.env.SENDGRID_API_KEY,
    sender: !!process.env.SENDGRID_VERIFIED_SENDER,
    company: !!process.env.COMPANY_EMAIL
  });
}