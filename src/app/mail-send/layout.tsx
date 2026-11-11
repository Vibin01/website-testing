import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Mail Dispatcher | Connect EC",
  description: "Internal Mail System - Authorized Access Only",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function MailSendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

