"use client";

import React from "react";
import ButtonDialog from "./RequestForQuoteDialogBox";

type FeatureItem = {
  text: string;
  subtext?: string;
};

type PricingSection = {
  title: string;
  features: FeatureItem[];
};

type PricingCardData = {
  tierTag: string;
  tier: string;
  label: string;
  subtitle: string;
  active: boolean;
  sections: PricingSection[];
  outcome: {
    line1: string;
    line2: string;
  };
  buttonText: string;
  footer: string;
};

const pricingCards: PricingCardData[] = [
  {
    tierTag: "Tier 1",
    tier: "Visibility",
    label: "Free Forever",
    subtitle: "See where hiring friction exists.",
    active: false,
    sections: [
      {
        title: "Hiring foundation",
        features: [
          { text: "Job Posting" },
          { text: "Recruiter Management" },
          { text: "Panel Management" },
        ],
      },
      {
        title: "Evaluation System",
        features: [
          { text: "Easy Evaluator" },
          { text: "System Templates" },
        ],
      },
      {
        title: "Intervention time",
        features: [
          {
            text: "Interview Intervention Time",
            subtext: "10% of the available window",
          },
          {
            text: "Offer-to-Join Intervention Time",
            subtext: "10% of the available window",
          },
          {
            text: "Easy Facilitator · DOC Vault",
          },
        ],
      },
    ],
    outcome: {
      line1: "See where hiring",
      line2: "friction begins.",
    },
    buttonText: "Start Free",
    footer: "",
  },
  {
    tierTag: "Tier 2",
    tier: "Diagnosis",
    label: "Custom pricing",
    subtitle: "Understand what is driving hiring friction.",
    active: true,
    sections: [
      {
        title: "Tracking & Exploration",
        features: [
          { text: "Easy Role Tracker" },
          { text: "Easy Explorer" },
        ],
      },
      {
        title: "Intervention Time",
        features: [
          {
            text: "Interview Intervention Time",
            subtext: "20% of the available window",
          },
          {
            text: "Offer-to-Join Intervention Time",
            subtext: "20% of the available window",
          },
        ],
      },
      {
        title: "Expanded engagement",
        features: [
          {
            text: "Easy Facilitator · DOC + PIX Vaults",
          },
        ],
      },
    ],
    outcome: {
      line1: "Understand the patterns behind delays",
      line2: "and drop-offs.",
    },
    buttonText: "Talk to us",
    footer: "Everything in Visibility, plus",
  },
  {
    tierTag: "Tier 3",
    tier: "Alignment",
    label: "Custom pricing",
    subtitle: "Act before hiring friction becomes an outcome.",
    active: false,
    sections: [
      {
        title: "Intervention time",
        features: [
          {
            text: "Interview Intervention Time",
            subtext: "40% of the available window",
          },
          {
            text: "Offer-to-Join Intervention Time",
            subtext: "40% of the available window",
          },
        ],
      },
      {
        title: "Expanded Systems",
        features: [
          { text: "Easy Calibrator" },
          { text: "Easy Navigator" },
        ],
      },
      {
        title: "Full signal layer",
        features: [
          {
            text: "Easy Facilitator · DOC + PIX + VID Vaults",
          },
          {
            text: "Customized Templates",
          },
        ],
      },
    ],
    outcome: {
      line1: "Intervene before risk becomes a",
      line2: "completed outcome.",
    },
    buttonText: "Talk to us",
    footer: "Everything in Visibility, plus",
  },
];

function CheckIcon({ active }: { active: boolean }) {
  return (
    <img
      src={`${
        active ? "/icons/tick-white-icon.svg" : "/icons/tick-gradient-icon.svg"
      }`}
      alt="check icon"
      className="size-iconsize-sm shrink-0 p-[0.1%]"
    />
  );
}

export default function PricingCardsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {pricingCards.map((card) => (
            <div
              key={card.tier}
              className={`flex flex-col rounded-md border border-[#C8DEFA] shadow-mobile-medium md:shadow-web-medium ${
                card.active
                  ? "bg-[#0668E1] text-white"
                  : "bg-white text-[#1B1C17]"
              }`}
            >
              {/* Header */}
              <div
                className={`px-md md:px-sm py-md ${
                  card.active
                    ? "border-b border-white/10"
                    : "border-b border-[#D3E6FF]"
                }`}
              >
                <span
                  className={`text-base font-bold ${
                    card.active ? "text-white" : "text-[#0668E1]"
                  }`}
                >
                  {card.tierTag}
                </span>

                <h2
                  className={`text-h2 font-extrabold mt-1 ${
                    card.active ? "text-white" : "text-[#1B1C17]"
                  }`}
                >
                  {card.tier}
                </h2>

                <p
                  className={`mt-2 text-base font-bold ${
                    card.active ? "text-white" : "text-[#0668E1]"
                  }`}
                >
                  {card.label}
                </p>

                <p
                  className={`mt-1 text-base font-medium ${
                    card.active ? "text-white/90" : "text-[#1B1C17]"
                  }`}
                >
                  {card.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-md md:px-sm py-md">
                <div className="space-y-md">
                  {card.sections.map((section) => (
                    <div key={section.title}>
                      <h3
                        className={`text-base font-bold ${
                          card.active ? "text-white" : "text-[#1B1C17]"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <div className="mt-sm space-y-sm">
                        {section.features.map((feature) => (
                          <div
                            key={feature.text}
                            className="flex items-start gap-xs text-xl font-medium"
                          >
                            <div className="shrink-0 mt-[3px]">
                              <CheckIcon active={card.active} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xl font-medium leading-snug">
                                {feature.text}
                              </span>
                              {feature.subtext && (
                                <span
                                  className={`text-md mt-1 ${
                                    card.active
                                      ? "text-white"
                                      : "text-[#727272]"
                                  }`}
                                >
                                  {feature.subtext}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-md">
                  <p
                    className={`text-center text-lg md:text-md font-medium px-2 min-h-[44px] flex flex-col items-center justify-center leading-snug ${
                      card.active ? "text-white" : "text-[#1B1C17]"
                    }`}
                  >
                    <div className="inline-flex">
                      <span className="font-bold">
                    Outcome: &nbsp;
                    </span>
                    <span className="font-medium">{card.outcome.line1}</span>
                    </div>
                    <span className="font-medium">{card.outcome.line2}</span>
                  </p>

                  <div className="mt-md">
                    <ButtonDialog
                      active={card.active}
                      tier={card.tier}
                      buttonText={card.buttonText}
                    />
                  </div>

                  <p
                    className={`mt-xs text-center text-md md:text-sm font-medium ${
                      card.active ? "text-white" : "text-[#1B1C17]"
                    } md:min-h-[24px]`}
                  >
                    {card.footer || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
