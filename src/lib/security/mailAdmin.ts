import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

// Private Mail Admin Credentials directly defined in code
const ADMIN_EMAIL = "hello@connectec.app";
const ADMIN_PASSWORD = "Siva@123";

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "connect_ec_mail_admin_fallback_secret_key_long_string_2026_secure"
);

export const MAIL_ADMIN_COOKIE = "connectec_mail_admin_session";

export function validateAdminCredentials(email?: string, password?: string): boolean {
  if (!email || !password) return false;

  return (
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD
  );
}

// Stores authentication ONLY in cookies
export async function createMailAdminSession(email: string) {
  const jwt = await new SignJWT({
    role: "mail_admin",
    email: email.trim().toLowerCase(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secretKey);

  const cookieStore = await cookies();
  cookieStore.set(MAIL_ADMIN_COOKIE, jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return jwt;
}

// Verifies authentication ONLY from cookies
export async function verifyMailAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(MAIL_ADMIN_COOKIE)?.value;

    if (!token) {
      return false;
    }

    const { payload } = await jwtVerify(token, secretKey);

    return (
      payload.role === "mail_admin" &&
      payload.email === ADMIN_EMAIL.toLowerCase()
    );
  } catch {
    return false;
  }
}

// Clears cookie on logout
export async function destroyMailAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(MAIL_ADMIN_COOKIE);
}
