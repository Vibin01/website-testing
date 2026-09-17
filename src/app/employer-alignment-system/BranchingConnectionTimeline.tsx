"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GitBranch,
  MessageSquare,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

type NodeItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  delay?: number;
};

const NodeItem = ({
  icon,
  label,
  active = false,
  delay = 0,
}: NodeItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-w-[72px] flex-col items-center gap-2"
    >
      <div
        className={[
          "relative flex h-12 w-12 items-center justify-center rounded-2xl border",
          "bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]",
          "transition-all duration-300",
          active
            ? "border-blue-500 bg-blue-50 text-blue-600 shadow-[0_10px_35px_rgba(37,99,235,0.18)]"
            : "border-slate-200 text-slate-500",
        ].join(" ")}
      >
        {icon}

        {active && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.3 }}
            className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"
          />
        )}
      </div>

      <span
        className={[
          "whitespace-nowrap text-xs font-semibold",
          active ? "text-slate-900" : "text-slate-500",
        ].join(" ")}
      >
        {label}
      </span>
    </motion.div>
  );
};

const AnimatedLine = ({
  direction = "horizontal",
  delay = 0,
  className = "",
}: {
  direction?: "horizontal" | "vertical";
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        scaleX: direction === "horizontal" ? 0 : 1,
        scaleY: direction === "vertical" ? 0 : 1,
      }}
      animate={{
        scaleX: 1,
        scaleY: 1,
      }}
      transition={{
        delay,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformOrigin:
          direction === "horizontal" ? "left center" : "top center",
      }}
      className={[
        direction === "horizontal"
          ? "h-px w-full origin-left bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
          : "w-px origin-top bg-gradient-to-b from-blue-400 via-blue-300 to-blue-100",
        className,
      ].join(" ")}
    />
  );
};

export default function BranchingConnectionTimeline() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header / Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
              <GitBranch className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Employer Continuity
              </p>
              <p className="text-sm font-bold text-slate-900">
                Connected Journey
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            DESKTOP DIAGRAM
        ========================================================== */}
        <div className="hidden md:block">
          {/* Logo → central node lead-in */}
          <div className="mx-auto grid max-w-5xl grid-cols-[1fr_90px_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="flex justify-end pr-5"
            >
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <BriefcaseBusiness className="h-4 w-4 text-slate-700" />
                </div>

                <span className="text-xs font-bold text-slate-700">
                  Employer
                </span>
              </div>
            </motion.div>

            <AnimatedLine delay={0.55} />

            <div />
          </div>

          {/* Main branching structure */}
          <div className="relative mx-auto mt-6 max-w-5xl">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
              {/* Left */}
              <div className="flex items-center">
                <AnimatedLine delay={1.05} className="mr-5" />

                <NodeItem
                  icon={<Target className="h-5 w-5" />}
                  label="Target"
                  delay={1.45}
                />
              </div>

              {/* CENTRAL NODE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border-2 border-blue-500 bg-blue-600 text-white shadow-[0_15px_45px_rgba(37,99,235,0.3)]">
                  <Sparkles className="h-7 w-7" />

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-[24px] bg-blue-400"
                  />
                </div>

                <span className="mt-2 text-xs font-bold text-slate-900">
                  Alignment
                </span>
              </motion.div>

              {/* Right */}
              <div className="flex items-center">
                <NodeItem
                  icon={<Users className="h-5 w-5" />}
                  label="Selection"
                  delay={1.45}
                />

                <AnimatedLine
                  delay={1.05}
                  className="ml-5 origin-left"
                />
              </div>
            </div>

            {/* Central vertical connection */}
            <div className="absolute left-1/2 top-[72px] flex -translate-x-1/2 flex-col items-center">
              <AnimatedLine
                direction="vertical"
                delay={1.85}
                className="h-20"
              />

              {/* Popup */}
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 2.35,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex min-w-[250px] items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 shadow-[0_10px_35px_rgba(37,99,235,0.12)]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>

                <span className="text-xs font-bold text-blue-700">
                  Alignment connects every stage
                </span>
              </motion.div>

              {/* Popup → content line */}
              <AnimatedLine
                direction="vertical"
                delay={2.75}
                className="h-10"
              />
            </div>
          </div>

          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.05,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-44 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 px-8 py-9 text-center shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  One Connected Employer Journey
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Keep every hiring activity connected to what comes before
                  and after it, creating continuity from targeting through
                  selection and hiring.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                  Employer Alignment Preserves Continuity
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            MOBILE DIAGRAM
        ========================================================== */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            {/* Mobile logo */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <span className="mt-2 text-xs font-bold text-slate-700">
                Employer
              </span>
            </motion.div>

            {/* Logo → center vertical connection */}
            <AnimatedLine
              direction="vertical"
              delay={0.5}
              className="my-4 h-10"
            />

            {/* Central */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.85,
                duration: 0.45,
              }}
              className="flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.3)]">
                <Sparkles className="h-6 w-6" />
              </div>

              <span className="mt-2 text-xs font-bold text-slate-900">
                Alignment
              </span>
            </motion.div>

            {/* Center → branches */}
            <AnimatedLine
              direction="vertical"
              delay={1.25}
              className="my-4 h-8"
            />

            {/* Left/right nodes become vertical stack */}
            <div className="flex w-full flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.55, duration: 0.4 }}
                className="flex w-full max-w-[260px] items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Target className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-900">Target</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Define the right direction
                  </p>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-300" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.4 }}
                className="flex w-full max-w-[260px] items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-900">
                    Selection
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Make confident decisions
                  </p>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-300" />
              </motion.div>
            </div>

            {/* Continue central connection */}
            <AnimatedLine
              direction="vertical"
              delay={2}
              className="my-5 h-10"
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 2.35,
                duration: 0.45,
              }}
              className="flex w-full max-w-[300px] items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-center"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <MessageSquare className="h-3.5 w-3.5" />
              </div>

              <span className="text-xs font-bold leading-5 text-blue-700">
                Alignment connects every stage
              </span>
            </motion.div>

            <AnimatedLine
              direction="vertical"
              delay={2.7}
              className="my-4 h-8"
            />

            {/* Mobile content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.95,
                duration: 0.5,
              }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-slate-950 px-5 py-7 text-center shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white">
                  One Connected Employer Journey
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Keep every hiring activity connected to what comes before
                  and after it, creating continuity across the journey.
                </p>

                <div className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-blue-300" />
                  <span>Employer Alignment Preserves Continuity</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}