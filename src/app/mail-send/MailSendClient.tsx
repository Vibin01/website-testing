"use client";

import React, { useState, useMemo, useEffect } from "react";
import { toast } from "sonner";
import {
  Mail,
  User,
  Send,
  Loader2,
  Sparkles,
  LogOut,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { generateMailSendTemplate } from "@/lib/mailSendTemplate";

export default function MailSendClient() {
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(
    "Your Hiring Strategy Deserves More Than a Target. It Needs Alignment."
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [lastSent, setLastSent] = useState<{
    to: string;
    name: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate live template preview HTML directly
  const previewHtml = useMemo(() => {
    return generateMailSendTemplate({
      name: name.trim() || "Sir/Madam",
      email: email.trim() || "[EMAIL_ADDRESS]",
      subject:
        subject.trim() ||
        "Your Hiring Strategy Deserves More Than a Target. It Needs Alignment.",
      message: message.trim(),
    });
  }, [name, email, subject, message]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter the recipient's name.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter the recipient's email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/mail-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      toast.success(`Email successfully sent to ${email.trim()}!`, {
        description: `Message ID: ${data.messageId || "Dispatched"}`,
      });

      setLastSent({
        to: email.trim(),
        name: name.trim(),
        time: new Date().toLocaleTimeString(),
      });
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout (clears cookie)
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/mail-send/auth", {
        method: "DELETE",
      });
      toast.success("Logged out successfully.");
      window.location.reload();
    } catch {
      toast.error("Failed to log out.");
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header with Private Route & Logout Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Mail Send System
            </h1>
          </div>


        </div>

        {/* Last Sent Notification */}
        {lastSent && (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Last email successfully sent to <strong>{lastSent.name}</strong> ({lastSent.to}) at {lastSent.time}
            </span>
          </div>
        )}

        {/* Main Grid: Form on Left, Live Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[10px] shadow-sm p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <Mail className="w-5 h-5 text-[#0668E1]" />
                <span>Message</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Recipient Name */}
              <div>
                <label
                  htmlFor="recipient-name"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="recipient-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-[6px] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0668E1]/20 focus:border-[#0668E1] transition-all"
                  />
                </div>
              </div>

              {/* Recipient Email */}
              <div>
                <label
                  htmlFor="recipient-email"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="recipient-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Mail"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-[6px] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0668E1]/20 focus:border-[#0668E1] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="email-subject"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <input
                    id="email-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter email subject..."
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-[6px] text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0668E1]/20 focus:border-[#0668E1] transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0668E1] hover:bg-[#0557bf] disabled:bg-blue-300 text-white font-medium text-sm rounded-[6px] shadow-sm hover:shadow transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Email Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Template Preview */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[10px] shadow-sm overflow-hidden flex flex-col h-[740px]">
            {/* Simulated Email Browser Header */}
            <div className="px-5 py-2.5 bg-white border-b border-slate-150 text-xs text-slate-500 flex flex-col gap-1">
              <div>
                <strong className="text-slate-700">To:</strong>{" "}
                <span className="text-slate-600">
                  {name ? `${name} <${email || "..."}>` : email || "[EMAIL_ADDRESS]"}
                </span>
              </div>
              <div>
                <strong className="text-slate-700">Subject:</strong>{" "}
                <span className="text-slate-800 font-medium">
                  {subject || "(No Subject)"}
                </span>
              </div>
            </div>

            {/* Iframe Preview Container */}
            <div className="flex-1 bg-slate-100/50 relative overflow-hidden">
              {isMounted ? (
                <iframe
                  title="Email Template Preview"
                  srcDoc={previewHtml}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-same-origin allow-popups"
                  suppressHydrationWarning
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                  Loading preview...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

