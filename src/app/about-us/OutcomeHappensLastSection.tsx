import React from "react";

function IntentionIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top radiating rays */}
      <path d="M12 2v2" />
      <path d="M5.5 4.5l1.2 1.2" />
      <path d="M18.5 4.5l-1.2 1.2" />
      {/* Bulb body */}
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 6a5.5 5.5 0 0 0-5.5 5.5c0 2 1.1 3.8 2.8 4.7V18h5.4v-1.8c1.7-.9 2.8-2.7 2.8-4.7A5.5 5.5 0 0 0 12 6z" />
      {/* Brain folds / Idea spark inside */}
      <path d="M10 11.5c0-1.1.9-2 2-2s2 .9 2 2" strokeWidth="1.4" />
      <path d="M12 9.5v4" strokeWidth="1.4" />
      <path d="M10.5 13.5h3" strokeWidth="1.4" />
    </svg>
  );
}

function DecisionIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Base origin node */}
      <circle cx="12" cy="19" r="1.8" fill="currentColor" />
      {/* Straight forward path */}
      <path d="M12 17.2V5" />
      <path d="M9.5 7.5L12 5l2.5 2.5" />
      {/* Left fork path */}
      <path d="M12 15c-2-2-4.5-4-7-5" />
      <path d="M5 13.2V10h3.2" />
      {/* Right fork path */}
      <path d="M12 15c2-2 4.5-4 7-5" />
      <path d="M19 13.2V10h-3.2" />
    </svg>
  );
}

function ActionIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hand pointer finger tapping / executing */}
      <path d="M12 3a1.5 1.5 0 0 1 1.5 1.5V11h1a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1 1.5 1.5v1.2a4 4 0 0 1-4 4h-2.5a4 4 0 0 1-3.4-1.9l-1.8-3.1a1.4 1.4 0 0 1 2.4-1.4l1.3 2.3V4.5A1.5 1.5 0 0 1 10.5 3a1.5 1.5 0 0 1 1.5 1.5V10h0V4.5A1.5 1.5 0 0 1 12 3z" />
      <path d="M8 20h8" strokeWidth="2" />
    </svg>
  );
}

function OutcomeIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Person head */}
      <circle cx="12" cy="7" r="1.8" fill="currentColor" />
      {/* Star / Success badge on chest */}
      <path
        d="M12 8.8l.6 1.2 1.3.2-.9.9.2 1.3-1.2-.6-1.2.6.2-1.3-.9-.9 1.3-.2z"
        fill="currentColor"
        stroke="none"
      />
      {/* Person body with raised celebration arms */}
      <path d="M8.5 13c.8-1.5 2.1-2 3.5-2s2.7.5 3.5 2" />
      {/* Supportive cupped hands underneath */}
      <path d="M4 17c2 2.5 5 4 8 4s6-1.5 8-4" />
      <path d="M3 13.5c1.2.2 2.8 1.2 3.8 2.5" />
      <path d="M21 13.5c-1.2.2-2.8 1.2-3.8 2.5" />
    </svg>
  );
}

const steps = [
  {
    id: "intention",
    title: "Intention",
    description: "What a person expects or wants.",
    color: "#3886E7",
    icon: <IntentionIcon className="size-7 sm:size-8" />,
  },
  {
    id: "decision",
    title: "Decision",
    description: "What the record captures.",
    color: "#0668E1",
    icon: <DecisionIcon className="size-7 sm:size-8" />,
  },
  {
    id: "action",
    title: "Action",
    description: "What behaviour begins to reveal.",
    color: "#055FCD",
    icon: <ActionIcon className="size-7 sm:size-8" />,
  },
  {
    id: "outcome",
    title: "Outcome",
    description: "What becomes visible last.",
    color: "#044AA0",
    icon: <OutcomeIcon className="size-7 sm:size-8" />,
  },
];

// Right-side chevron arrow with smooth, continuous curved corners (no beak)
const RIGHT_CURVED_ARROW = [
  "calc(100% - 46px) 0%",
  "calc(100% - 42px) 2px",
  "calc(100% - 39px) 6px",
  "100% 50%",
  "calc(100% - 39px) calc(100% - 6px)",
  "calc(100% - 42px) calc(100% - 2px)",
  "calc(100% - 46px) 100%",
].join(", ");

const MOBILE_CURVED_ARROW = [
  "10px 0%",
  "calc(100% - 22px) 0%",
  "calc(100% - 19px) 2px",
  "calc(100% - 17px) 5px",
  "100% 50%",
  "calc(100% - 17px) calc(100% - 5px)",
  "calc(100% - 19px) calc(100% - 2px)",
  "calc(100% - 22px) 100%",
  "10px 100%",
  "7px calc(100% - 1px)",
  "4px calc(100% - 3px)",
  "2px calc(100% - 6px)",
  "0% calc(100% - 10px)",
  "0% 10px",
  "2px 6px",
  "4px 3px",
  "7px 1px",
].join(", ");

const zIndexes = ["z-40", "z-30", "z-20", "z-10"];

export default function OutcomeHappensLastSection() {
  return (
    <section id="outcome-section" className="relative w-full">
      <div className="mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="mb-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
          WHERE CHANGES BECOMES VISIBLE
        </p>

        {/* Main Title */}
        <h2 className="mb-xs text-h2 font-extrabold tracking-tight leading-tight">
          <span className="text-[#1B1C17]">The Outcome </span>
          <span className="text-[#0668E1]">Happens Last.</span>
        </h2>

        {/* Description */}
        <p className="mb-md text-base font-medium text-[#1B1C17] leading-relaxed">
          No-shows, declines and stalled roles do not always begin at the outcome.
          That is where the change finally becomes visible.
        </p>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP PIPELINE: Continuous Chevron Chain (Zero Gaps)   */}
      {/* ======================================================== */}
      <div className="hidden md:flex flex-row items-stretch w-full rounded-l-md">
        {steps.map((step, index) => {
          const isFirst = index === 0;

          if (isFirst) {
            return (
              <div
                key={step.id}
                style={{ flexGrow: 1.11 }}
                className={`relative flex-1 min-w-0 rounded-l-md overflow-hidden ${zIndexes[index]}`}
              >
                <div
                  style={{
                    backgroundColor: step.color,
                    clipPath: `polygon(0% 0%, ${RIGHT_CURVED_ARROW}, 0% 100%)`,
                  }}
                  className="w-full h-full flex flex-col justify-start p-md"
                >
                  <div className="mb-xs text-white">{step.icon}</div>
                  <h3 className="mb-xs text-base font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xl font-medium text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={step.id}
              style={{
                backgroundColor: step.color,
                clipPath: `polygon(0% 0%, ${RIGHT_CURVED_ARROW}, 0% 100%)`,
              }}
              className={`relative flex-1 min-w-0 -ml-[42px] flex flex-col justify-start px-xl py-md ${zIndexes[index]}`}
            >
              <div className="pl-md">
                <div className="mb-xs text-white">{step.icon}</div>
                <h3 className="mb-xs text-base font-bold text-white tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xl font-medium text-white leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* MOBILE PIPELINE: Vertically Stacked Chevron Cards        */}
      {/* ======================================================== */}
      <div className="flex md:hidden flex-col gap-0 w-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative w-full rounded-l-md overflow-hidden"
          >
            <div
              style={{
                backgroundColor: step.color,
                clipPath: `polygon(${MOBILE_CURVED_ARROW})`,
              }}
              className="relative flex flex-col justify-center p-sm pr-10 text-white"
            >
              <div className="mb-xs text-white">{step.icon}</div>
              <h3 className="mb-xs text-base font-bold text-white tracking-wide">
                {step.title}
              </h3>
              <p className="text-xl font-medium text-white leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Key Takeaway Callout */}
      <div className="mt-md text-center">
        <p className="text-h5 font-bold mx-auto leading-snug">
          <span className="text-[#0668E1]">Earlier visibility </span>
          <span className="text-[#1B1C17]">creates time to intervene.</span>
        </p>
      </div>
    </section>
  );
}
