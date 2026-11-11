import { NextResponse } from "next/server";
import {
  validateAdminCredentials,
  createMailAdminSession,
  verifyMailAdminSession,
  destroyMailAdminSession,
} from "@/lib/security/mailAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email ID and Password are required." },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(email, password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid Login ID or Password. Access denied." },
        { status: 401 }
      );
    }

    // Set authentication strictly in HTTP cookie
    await createMailAdminSession(email);

    return NextResponse.json(
      {
        success: true,
        message: "Authentication successful.",
      },
      {
        status: 200,
        headers: {
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Authentication error." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await destroyMailAdminSession();
    return NextResponse.json(
      { success: true, message: "Logged out successfully." },
      {
        status: 200,
        headers: {
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to log out." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const authenticated = await verifyMailAdminSession();
  return NextResponse.json(
    { authenticated },
    {
      status: 200,
      headers: {
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    }
  );
}
