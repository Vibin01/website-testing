import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateMailSendTemplate } from "@/lib/mailSendTemplate";
import { verifyMailAdminSession } from "@/lib/security/mailAdmin";

// Helper to instantiate transporter based on environment configuration
function getTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// POST: Send email to recipient using the template
export async function POST(req: Request) {
  // 100% Security Protection: Check cookie session
  const isAuthorized = await verifyMailAdminSession();
  if (!isAuthorized) {
    return NextResponse.json(
      { error: "Unauthorized access. Please login with your admin credentials to send emails." },
      {
        status: 401,
        headers: {
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      }
    );
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Recipient name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Recipient email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailSubject =
      (subject && subject.trim()) ||
      "Your Hiring Strategy Deserves More Than a Target. It Needs Alignment.";
    const emailMessage = (message && message.trim()) || "";

    const htmlContent = generateMailSendTemplate({
      name: trimmedName,
      email: trimmedEmail,
      subject: emailSubject,
      message: emailMessage,
      referenceId: Date.now().toString(36),
    });

    const transporter = getTransporter();

    const info = await transporter.sendMail({
      from: `"Connect EC" <${process.env.SMTP_USER}>`,
      to: trimmedEmail,
      subject: emailSubject,
      html: htmlContent,
      headers: {
        "X-Entity-Ref-ID": `${Date.now()}`,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ /api/mail-send error:", error);
    return NextResponse.json(
      {
        error: error?.message || "Failed to send email. Please check your SMTP settings.",
      },
      { status: 500 }
    );
  }
}

// GET: Render or return email template HTML preview
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "John Doe";
  const email = searchParams.get("email") || "john@example.com";
  const subject = searchParams.get("subject") || "Welcome to Connect EC";
  const message =
    searchParams.get("message") ||
    "Thank you for being part of Connect EC. We are pleased to share this update with you.";

  const html = generateMailSendTemplate({ name, email, subject, message });

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
