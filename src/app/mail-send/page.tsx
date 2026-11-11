import { verifyMailAdminSession } from "@/lib/security/mailAdmin";
import MailAdminLogin from "./MailAdminLogin";
import MailSendClient from "./MailSendClient";

export const dynamic = "force-dynamic";

export default async function MailSendPage() {
  const isAuthenticated = await verifyMailAdminSession();

  if (!isAuthenticated) {
    return <MailAdminLogin />;
  }

  return <MailSendClient />;
}
