import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[<>]/g, "");
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);

    // Current date/time
    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Vancouver",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // -----------------------------
    // Email to User (Welcome Email)
    // -----------------------------
    const userEmail = {
      to: sanitizedEmail,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "Codsphere",
      },
      subject: `Welcome to Codsphere, ${sanitizedName}!`,
      text: `
Hi ${sanitizedName},

Thank you for signing up for a free trial at Codsphere!

Our team will reach out to you shortly with all the details to get started.

- The Codsphere Team
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #33FCFE; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; color: white; }
    .content { background: #f7f9fc; padding: 30px; border-radius: 0 0 10px 10px; }
    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #586069; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Welcome to Codsphere!</h2>
    </div>
    <div class="content">
      <p>Hi ${sanitizedName},</p>
      <p>Thank you for signing up for a free trial at <strong>Codsphere</strong>!</p>
      <p>Our team will reach out to you shortly with all the details to get started.</p>
      <p>We’re excited to help you create amazing digital experiences!</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Codsphere. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // -----------------------------
    // Email to Company (Notification)
    // -----------------------------
    const companyEmail = {
      to: process.env.COMPANY_EMAIL!,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "Codsphere Free Trial",
      },
      replyTo: sanitizedEmail,
      subject: `New Free Trial Request from ${sanitizedName}`,
      text: `
New free trial request:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Date: ${timestamp}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #33FCFE, #010B66); padding: 30px; border-radius: 10px 10px 0 0; color: white; text-align: center; }
    .content { background: #f7f9fc; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: 600; color: #586069; margin-bottom: 5px; font-size: 12px; text-transform: uppercase; }
    .value { font-size: 15px; color: #24292e; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📬 New Free Trial Request</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${sanitizedName}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${sanitizedEmail}</div>
      </div>
      <div class="field">
        <div class="label">Date</div>
        <div class="value">${timestamp}</div>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send both emails
    await sgMail.send(userEmail);
    await sgMail.send(companyEmail);

    return NextResponse.json({
      success: true,
      message: "Free trial request submitted successfully.",
    });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Try again later." },
      { status: 500 },
    );
  }
}
