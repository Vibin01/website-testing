import Image from "next/image";
import React from "react";

interface RoleCard {
  role: string;
  avatar: string;
  title: string;
  description: string;
}

const roleCards: RoleCard[] = [
  {
    role: "Employers",
    avatar: "/about/icons/employers-icon.svg",
    title: "Hiring Strategy",
    description:
      "Keep priorities, execution conditions and hiring decisions connected as business realities change.",
  },
  {
    role: "Recruiters",
    avatar: "/about/icons/recruiters-icon.svg",
    title: "Talent Acquisition",
    description:
      "Keep coordination, participation, feedback and candidate commitment moving across hiring stages.",
  },
  {
    role: "Candidates",
    avatar: "/about/icons/candidate-icon.svg",
    title: "Career Progress",
    description:
      "Keep interviews, information, feedback and career decisions connected across opportunities.",
  },
];

export default function OneHiringSystemSection() {
  return (
    <section id="one-hiring-system" className="w-full">
      {/* Header Area */}
      <div className="flex flex-col items-start text-left mb-xl">
        {/* Eyebrow */}
        <p className="mb-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
          ONE HIRING SYSTEM
        </p>

        {/* Main Title */}
        <h2 className="mb-xs text-h2 font-extrabold tracking-tight leading-tight">
          <span className="block md:inline text-[#1B1C17]">Different Goals. </span>
          <span className="block md:inline text-[#0668E1]">One Need for Continuity.</span>
        </h2>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {roleCards.map((card) => (
          <div
            key={card.role}
            className="flex flex-col items-start rounded-md border border-[#D0E5FF] bg-white p-md md:p-sm shadow-mobile-mini md:shadow-web-mini transition-all hover:shadow-md"
          >
            {/* Role Header Pill */}
            <div className="w-full flex items-center gap-sm rounded-sm border border-[#D9E9FC] bg-white p-xs">
              <div className="relative size-iconsize-md scale-90 flex items-center justify-center">
                <Image
                  src={card.avatar}
                  alt={card.role}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-base font-bold text-[#1B1C17]">
                {card.role}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-md mb-xs text-h5 font-bold text-[#0668E1]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-xl font-medium text-[#1B1C17] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout Bar */}
      <div className="mt-xl flex items-center justify-center rounded-md border border-[#B2D0F6] bg-[#F2F8FF] px-md py-md text-center">
        <p className="text-base font-bold">
          <span className="text-[#1B1C17]">Three actors. Three goals. </span>
          <span className="text-[#0668E1]">One hiring continuity.</span>
        </p>
      </div>
    </section>
  );
}
