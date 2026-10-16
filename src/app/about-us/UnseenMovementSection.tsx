import React from "react";

const movementCards = [
  {
    tag: "INTERVIEW CONFIRMED",
    title: "Responses Begin to Slow.",
    description:
      "The schedule remains unchanged while expected participation begins to weaken.",
  },
  {
    tag: "OFFER ACCEPTED",
    title: "Engagement Begins to Fade.",
    description:
      "The acceptance remains recorded while joining confidence starts to change.",
  },
  {
    tag: "ROLE ACTIVE",
    title: "Momentum Begins to Slow.",
    description:
      "The requirement remains open while activity and urgency begin to weaken.",
  },
];

export default function UnseenMovementSection() {
  return (
    <div className="w-full">
      {/* Eyebrow */}
      <p className="mt-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
        THE UNSEEN MOVEMENT
      </p>

      {/* Main Title */}
      <h2 className="mb-xs text-h2 font-extrabold tracking-tight leading-tight">
        <span className="text-[#1B1C17]">The Status Holds. </span>
        <span className="text-[#0668E1]">The Conditions Move.</span>
      </h2>

      {/* Description */}
      <p className="mb-xl text-xl font-medium text-[#1B1C17]">
        What is recorded can remain certain even while the behaviour carrying it forward begins to change.
      </p>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {movementCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md border border-[#DEEDFF] bg-white p-sm shadow-mobile-medium md:shadow-web-medium"
          >
            <p className="mb-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              {card.tag}
            </p>
            <h3 className="mb-xs text-xl font-bold text-[#1B1C17]">
              {card.title}
            </h3>
            <p className="text-xl font-medium text-[#2C2C2C]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-xl flex flex-col md:flex-row items-center justify-between gap-md rounded-md border border-[#D9E9FC] bg-white p-sm shadow-mobile-medium md:shadow-web-medium">
        <div className="flex-1 text-center ">
          <p className="text-base font-bold text-[#1B1C17]">
            Status shows what was decided.
          </p>
        </div>

        <div className="w-full md:flex-1 rounded-md border border-[#B2D0F6] bg-[#F2F8FF] px-md py-md text-center">
          <p className="text-xl font-bold text-[#0668E1]">
            Behaviour reveals whether that decision is still carrying forward.
          </p>
        </div>
      </div>
    </div>
  );
}
