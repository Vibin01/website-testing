"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Role } from "@/domain/assessment/types";
import {
  registerUserAction,
  verifyOtpAction,
} from "@/server/actions/auth-actions";
import { getAssessmentStatusAction } from "@/server/actions/assignment-action";
import Image from "next/image";
import dynamic from "next/dynamic";

const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "rediffmail.com",
  "protonmail.com",
];
 const roles = [
    {
      id: "candidate" as Role,
      title: "For Candidate",
      description: "Decide with confidence",
      icon: "/resources/alignment-test/candidate-round-icon.svg",
      bgLight: "bg-blue-50",
    },
    {
      id: "recruiter" as Role,
      title: "For Recruiter",
      description: "Drive hiring with clarity",
      icon: "/resources/alignment-test/recruiters-round-icon.svg",
      bgLight: "bg-blue-50",
    },
    {
      id: "employer" as Role,
      title: "For Employer",
      description: "Decide with clarity",
      icon: "/resources/alignment-test/employer-round-icon.svg",
      bgLight: "bg-gray-100",
    },
  ];

const OtpVerification = dynamic(
  () => import("./OtpVerification")
);

const MobileRoleDrawer = dynamic(
  () => import("./MobileRoleDrawer").then((m) => m.MobileRoleDrawer)
);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPersonalEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return personalEmailDomains.includes(domain);
}

export function RoleSelector({
  mode,
  phase,
}: {
  mode: string;
  phase: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // const mode = searchParams.get("mode") || "single";
  // const phase = searchParams.get("phase") || "uncertainty";

  // time stamp

  const [registerStartTime, setRegisterStartTime] = useState<number | null>(null);
const [registerEndTime, setRegisterEndTime] = useState<number | null>(null);

const [otpStartTime, setOtpStartTime] = useState<number | null>(null);
const [otpEndTime, setOtpEndTime] = useState<number | null>(null);

// time stamp end

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [step, setStep] = useState<"REGISTER" | "OTP">("REGISTER");
  const [userId, setUserId] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [error, setError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  const [verifyLoading, setVerifyLoading] = useState(false);

  const [resendLoading, setResendLoading] = useState(false);

 

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSelectedRole("candidate");
    }
  }, []);

  const routeAfterLogin = async (role: Role) => {
    const status = await getAssessmentStatusAction(role as any);

    if (status.success) {
      const phaseReports = (status.phaseReports || {}) as Record<string, any>;

      if (
        mode === "single" &&
        (status.completedPhases as string[])?.includes(phase) &&
        phaseReports[phase]
      ) {
        router.push(
          `/resources/alignment-test/${role}/report?mode=single&phase=${phase}`,
        );
        return;
      }

      if (mode === "full" && status.overallReport) {
        router.push(`/resources/alignment-test/${role}/report?mode=full`);
        return;
      }
    }
    router.push(
      `/resources/alignment-test/${selectedRole}?mode=${mode}&phase=${phase}`,
    );
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
//  time stamp   

const startTime = Date.now();
  setRegisterStartTime(startTime);

    setError("");

    if (!selectedRole) {
      setError("Please select a role.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (
      (selectedRole === "recruiter" || selectedRole === "employer") &&
      isPersonalEmail(email)
    ) {
      setError("Recruiters and employers must use an official email.");
      return;
    }

    setRegisterLoading(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("role", selectedRole);

    const res = await registerUserAction(formData);

    // time stamp
      const endTime = Date.now();
    setRegisterEndTime(endTime);

    console.log("Register Start:", new Date(startTime).toISOString());
    console.log("Register End:", new Date(endTime).toISOString());
    console.log(
      "Register Duration:",
      ((endTime - startTime) / 1000).toFixed(2),
      "seconds"
    );



    if (res.error) {
      setError(res.error);
      setRegisterLoading(false);
      return;
    }

    if (res.success) {
      setUserId(res.userId!);
      setStep("OTP");
    }

    setRegisterLoading(false);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;

    const nextOtp = [...otpValues];
    nextOtp[index] = value;
    setOtpValues(nextOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpString = otpValues.join("");

    if (!userId || !selectedRole || otpString.length !== 6) return;

    // time stapm
      const startTime = Date.now();
  setOtpStartTime(startTime);


    setVerifyLoading(true);
    setError("");

    const res = await verifyOtpAction(userId, otpString);

// time stamp
    const endTime = Date.now();
    setOtpEndTime(endTime);

    console.log("OTP Verify Start:", new Date(startTime).toISOString());
    console.log("OTP Verify End:", new Date(endTime).toISOString());
    console.log(
      "OTP Verify Duration:",
      ((endTime - startTime) / 1000).toFixed(2),
      "seconds"
    );

    if (res.error) {
      setError(res.error);
      setVerifyLoading(false);
      return;
    }

    if (res.success && selectedRole) {
      await routeAfterLogin(selectedRole);
    }

    setVerifyLoading(false);
  };

  const handleResendOtp = async () => {
    if (!selectedRole) return;

    setError("");
    setResendLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name.trim());
      formData.append("email", email.trim().toLowerCase());
      formData.append("role", selectedRole);

      const res = await registerUserAction(formData);

      if (res.error) {
        setError(res.error);
        return;
      }

      // Clear old OTP
      setOtpValues(Array(6).fill(""));

      // Focus first input
      inputRefs.current[0]?.focus();
    } catch (error) {
      setError("Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  const resetFormState = () => {
    setStep("REGISTER");
    setUserId(null);

    setName("");
    setEmail("");

    setOtpValues(Array(6).fill(""));

    setError("");
    setRegisterLoading(false);
    setVerifyLoading(false);
    setResendLoading(false);
  };

  if (step === "OTP") {
    return (
      <OtpVerification
        role={selectedRole!}
        otpValues={otpValues}
        inputRefs={inputRefs}
        error={error}
        verifyLoading={verifyLoading}
        resendLoading={resendLoading}
        handleOtpChange={handleOtpChange}
        handleOtpKeyDown={handleOtpKeyDown}
        handleVerifyOtp={handleVerifyOtp}
        handleResendOtp={handleResendOtp}
        />
    );
  }

  return (
    <div className="flex items-center justify-center py-[5%]">
      <div className="flex-1 pl-[5%]">
        <h3 className="text-base font-bold ">Start Your</h3>
        <h2 className="mb-md text-h2 font-extrabold text-primary">
          Alignment Journey
        </h2>

        <p className="text-base font-medium">
          Choose how you want to get started.
          <br />
          Your experience will adapt based on your role.
        </p>

        <div className="mt-md max-w-[420px] space-y-md">
          {roles.map((role) => {
            const Icon = role.icon;
            const active = selectedRole === role.id;

            return (
              <div
                key={role.id}
                onClick={() => {
                  if (selectedRole !== role.id) {
                    resetFormState();
                  }

                  setSelectedRole(role.id);

                  if (window.innerWidth < 768) {
                    setDrawerOpen(true);
                  }
                }}
                className={`flex cursor-pointer items-center gap-sm rounded-md border-[1.5px] p-sm transition-all ${
                  active
                    ? "border-primary shadow-[0_4px_20px_rgba(15,98,254,0.12)]"
                    : "border-[#ECF5FF] bg-white hover:border-blue-300"
                }`}
              >
                <div
                  className={`flex size-iconsize-xl items-center justify-center rounded-full ${role.bgLight}`}
                >
                  <Image
  src={Icon}
  alt={`${role.title} icon`}
  width={64}
  height={64}
                    className={`size-iconsize-lg `}
                  />
                </div>

                <div>
                  <h3
                    className={`text-base font-bold ${
                      active ? "text-primary" : ""
                    }`}
                  >
                    {role.title}
                  </h3>
                  <p className="text-xl font-medium">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedRole && (
        <div className="hidden md:block flex-1">
          <div className="rounded-sm border border-[#D3E6FF] bg-white p-md shadow-[0px_4px_40px_5px_#0668E10A] md:max-w-[80%]">
            <h3 className="mb-md flex items-center gap-xs text-h5 font-bold">
              {roles.find((r) => r.id === selectedRole)?.title} Alignment Test
            </h3>

            <div className="mb-md rounded-sm border border-[#B2D0F6] bg-[#EEF6FF] p-sm text-xl font-medium text-primary">
              Understand how your decisions align across real hiring situations.
            </div>

            {error && (
              <div className="mb-sm text-md font-medium text-red-500">
                {error}
              </div>
            )}

            <form className="space-y-xs" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-sm border border-[#C5C4C4] px-sm py-xs text-[15px] font-medium outline-none focus:border-primary"
                required
              />

              <input
                type="email"
                placeholder={
                  selectedRole === "candidate" ? "Email" : "Official email"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-sm border border-[#C5C4C4] px-sm py-xs text-[15px] font-medium outline-none focus:border-primary"
                required
              />

              <div className="pt-md">
                <button
                  type="submit"
                  disabled={registerLoading}
                  className="w-full rounded-sm cursor-pointer bg-primary px-md py-xs text-xl font-medium text-white disabled:opacity-70"
                >
                  {registerLoading
                    ? "Checking..."
                    : selectedRole === "candidate"
                      ? "Register for Free"
                      : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <MobileRoleDrawer
        role={roles.find((r) => r.id === selectedRole) || null}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onSubmit={handleRegister}
        loading={registerLoading}
        error={error}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
}
