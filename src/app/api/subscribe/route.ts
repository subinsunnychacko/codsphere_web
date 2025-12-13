// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Simple rate limiting for subscriptions
const subscriptionRateLimitMap = new Map();

function checkSubscriptionRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3; // Max 3 subscription attempts per hour
  
  const requests = subscriptionRateLimitMap.get(ip) || [];
  const recentRequests = requests.filter((time: number) => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }
  
  recentRequests.push(now);
  subscriptionRateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    
    // Check rate limit
    if (!checkSubscriptionRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many subscription attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
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

    // Email to company about new subscriber
    const notificationEmail = {
      to: process.env.COMPANY_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Codsphere Newsletter'
      },
      subject: `New Newsletter Subscription - ${email}`,
      text: `
New newsletter subscription received!

Email: ${email}
Date: ${timestamp}

Please add this subscriber to your mailing list.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #000; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
    .content { background: #f7f9fc; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Newsletter Subscriber</h2>
    </div>
    <div class="content">
      <div class="info-box">
        <p><strong>Email Address:</strong></p>
        <p style="font-size: 18px; color: #0366d6;">${email}</p>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          <strong>Subscribed:</strong> ${timestamp}
        </p>
      </div>
      <p style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
        Remember to add this subscriber to your mailing list or CRM.
      </p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Welcome email to subscriber
    const welcomeEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Codsphere'
      },
      subject: 'Welcome to Codsphere Newsletter!',
      text: `
Welcome to Codsphere!

Thank you for subscribing to our newsletter. You're now part of our community!

What to expect:
- Industry insights and trends
- CRM and ERP best practices
- Business automation tips
- Case studies and success stories
- Exclusive offers and updates

We promise to only send you valuable content and respect your inbox.

If you have any questions or need assistance with your digital transformation journey, feel free to reach out to us at info@codsphere.ca.

Best regards,
The Codsphere Team

--
If you wish to unsubscribe, please contact us at info@codsphere.ca
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
    .feature-list {
      background: #f7fafc;
      padding: 25px;
      border-radius: 8px;
      margin: 25px 0;
    }
    .feature-list ul {
      margin: 0;
      padding-left: 20px;
      color: #2d3748;
    }
    .feature-list li {
      margin: 10px 0;
      line-height: 1.5;
    }
    .cta-button {
      display: inline-block;
      padding: 14px 30px;
      background: #000;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      margin-top: 20px;
    }
    .footer { 
      text-align: center; 
      margin-top: 40px; 
      font-size: 12px; 
      color: #586069;
      padding-top: 20px;
      border-top: 1px solid #e1e4e8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 32px;">Welcome to Codsphere! 🎉</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">
        Thank you for subscribing to our newsletter
      </p>
    </div>
    
    <div class="content">
      <p>Hi there!</p>
      
      <p>Welcome to the Codsphere community! We're thrilled to have you on board.</p>
      
      <div class="feature-list">
        <strong style="color: #000; font-size: 18px;">What you can expect from us:</strong>
        <ul>
          <li>📊 Industry insights and digital transformation trends</li>
          <li>💡 CRM and ERP implementation best practices</li>
          <li>🚀 Business automation tips and strategies</li>
          <li>📈 Real-world case studies and success stories</li>
          <li>🎁 Exclusive offers and early access to new features</li>
        </ul>
      </div>
      
      <p>We're passionate about helping businesses streamline their operations and achieve digital excellence.</p>
      
      <p style="text-align: center;">
        <a href="https://codsphere.ca" class="cta-button" style="color: white;">
          Explore Our Services
        </a>
      </p>
      
      <p>Have questions? Contact us at <a href="mailto:info@codsphere.ca" style="color: #0366d6;">info@codsphere.ca</a>.</p>
      
      <p>Best regards,<br>
      <strong>The Codsphere Team</strong></p>
    </div>
    
    <div class="footer">
      <p><strong>Codsphere</strong> - Your Partner in Digital Transformation</p>
      <p style="color: #a0aec0; font-size: 11px; margin-top: 10px;">
        You're receiving this because you subscribed at codsphere.ca<br>
        To unsubscribe, please contact us at info@codsphere.ca
      </p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Send both emails
    await sgMail.send(notificationEmail);
    await sgMail.send(welcomeEmail);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });

  } catch (error: unknown) {
    console.error('Newsletter Subscription Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to subscribe. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'Newsletter API is running',
    configured: !!process.env.SENDGRID_API_KEY 
  });
}