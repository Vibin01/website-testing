"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";

export default function MailAdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password) {
      toast.error("Please enter both Email ID and Password.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/mail-send/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      toast.success("Login successful!");
      window.location.reload();
    } catch (err: any) {
      setErrorMessage(err.message || "Invalid credentials.");
      toast.error(err.message || "Invalid credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-[420px] space-y-6">
        {/* Optional Logo */}
        <div className="flex justify-center mb-2">
          <h2 className="text-[24px] font-semibold text-[#1B1C17]">Mail Login</h2>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[17px] font-medium text-[#1B1C17] mb-2"
              style={{ fontFamily: "var(--font-exo2), sans-serif" }}
            >
              Your Official Email ID
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1B1C17] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0668E1] focus:ring-1 focus:ring-[#0668E1] transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-[17px] font-medium text-[#1B1C17] mb-2"
              style={{ fontFamily: "var(--font-exo2), sans-serif" }}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 pr-11 py-3 bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1B1C17] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0668E1] focus:ring-1 focus:ring-[#0668E1] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#94A3B8] hover:text-[#475467] transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>



          {/* Login Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-[#0668E1] hover:bg-[#0557bf] disabled:bg-[#0668E1]/60 text-white font-semibold text-[16px] rounded-[8px] transition-all cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
              style={{ fontFamily: "var(--font-exo2), sans-serif" }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
