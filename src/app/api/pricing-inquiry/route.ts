import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { user, plan } = await req.json();

    if (!user?.fullName || !user?.email || !plan?.name) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // -----------------------------
    // Sanitize inputs
    // -----------------------------
    const sanitize = (str: string) => str.replace(/[<>]/g, "");
    const name = sanitize(user.fullName);
    const email = sanitize(user.email);
    const phone = sanitize(user.phone || "N/A");

    // -----------------------------
    // Timestamp
    // -----------------------------
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
    // Email → USER (Confirmation)
    // -----------------------------
    const userEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "Codsphere",
      },
      subject: `We received your ${plan.name} plan inquiry`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Inter, Arial, sans-serif; background:#f5f7fb; padding:20px; }
    .card { max-width:600px; margin:auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.08); }
    .header { background:linear-gradient(135deg,#34e0ff,#1e3a8a); padding:30px; color:white; text-align:center; }
    .content { padding:30px; color:#1f2937; }
    .plan { background:#f1f5f9; padding:16px; border-radius:12px; margin:20px 0; }
    .footer { text-align:center; font-size:12px; color:#6b7280; padding:20px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>Thanks for reaching out 👋</h2>
      <p>Your pricing inquiry is confirmed</p>
    </div>

    <div class="content">
      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thanks for your interest in <strong>Codsphere</strong>.
        We’ve received your inquiry for the <strong>${plan.name}</strong> plan.
      </p>

      <div class="plan">
        <p><strong>Plan:</strong> ${plan.name}</p>
        <p><strong>Monthly:</strong> ${plan.price}</p>
        <p><strong>Setup:</strong> ${plan.setup}</p>
      </div>

      <p>
        Our team will review your request and get back to you shortly
        with next steps.
      </p>

      <p>Talk soon,<br/><strong>Codsphere Team</strong></p>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} Codsphere. All rights reserved.
    </div>
  </div>
</body>
</html>
      `,
    };

    // -----------------------------
    // Email → COMPANY (Lead Alert)
    // -----------------------------
    const companyEmail = {
      to: process.env.COMPANY_EMAIL!,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: "Codsphere Pricing",
      },
      replyTo: email,
      subject: `🔥 New Pricing Inquiry – ${plan.name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background:#f5f7fb; padding:20px; }
    .card { max-width:600px; margin:auto; background:white; border-radius:14px; overflow:hidden; }
    .header { background:#0f172a; color:white; padding:24px; text-align:center; }
    .content { padding:24px; }
    .field { margin-bottom:14px; }
    .label { font-size:12px; color:#6b7280; text-transform:uppercase; }
    .value { font-size:15px; font-weight:600; color:#111827; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>📥 New Pricing Inquiry</h2>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>

      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${phone}</div>
      </div>

      <hr style="margin:20px 0;" />

      <div class="field">
        <div class="label">Plan</div>
        <div class="value">${plan.name}</div>
      </div>

      <div class="field">
        <div class="label">Monthly</div>
        <div class="value">${plan.price}</div>
      </div>

      <div class="field">
        <div class="label">Setup</div>
        <div class="value">${plan.setup}</div>
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

    // -----------------------------
    // Send both emails
    // -----------------------------
    await sgMail.send([userEmail, companyEmail]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pricing Inquiry Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send inquiry" },
      { status: 500 },
    );
  }
}
