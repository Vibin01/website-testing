"use client";

import Image from "next/image";

export default function AlignmentWithinSection() {

const alignmentCards = [
  {
    id: "within",
    type: "side",
    icon: "/resources/alignment-test/head-icon.svg",
    label: "HEAD",
    title: (
      <>
       Understanding
      </>
    ),
    description:
      "What you notice, understand, and how you interpret the situation.",
  },
  {
    id: "intelligence",
    type: "center",
    icon: "/resources/alignment-test/heart-icon.svg",
    label: "HEART",
    title: (
      <>
       Intention
      </>
    ),
    description:
      "What you believe, value, and intend to do in the situation.",
  },
  {
    id: "across",
    type: "side",
    icon: "/resources/alignment-test/hand-icon.svg",
    label: "HAND",
    title: (
      <>
       Action
      </>
    ),
    description:
      "How you respond, act, and follow through in the situation.",
  },
];

  return (
    <section className="py-[5%] md:px-[5%]">
      <div className="mx-auto w-full ">
        {/* Header */}
        <div className="text-center">
          <p className=" text-xl text-primary font-bold">
            ALIGNMENT WITHIN
          </p>

          <h1 className="text-h2 font-extrabold ">
            Head. Heart. Hand. In Harmony.
          </h1>

          <p className="mx-auto font-medium text-base">
            Alignment Within is the condition in which understanding, intention, and action remain coherent as situations change.
          </p>
        </div>

    <div className="mt-xl grid grid-cols-1 items-stretch gap-md md:grid-cols-[1fr_1.1fr_1fr]">
  {alignmentCards.map((card) => {
    const isCenter = card.type === "center";

    return (
      <article
  key={card.id}
  className={
    isCenter
      ? "flex md:-mt-md flex-col items-center rounded-md bg-[linear-gradient(193.87deg,#0075FF_25.37%,#004BA6_81.69%)] p-lg md:p-md text-center text-white shadow-web-medium"
      : "flex flex-col items-center justify-between rounded-md border border-[#DEEDFF] bg-white p-lg md:p-md text-center shadow-web-medium"
  }
>
        {/* Icon */}
        <div
          className={
            isCenter
              ? "mb-md md:mb-sm grid p-sm scale-125 md:scale-110 place-items-center rounded-full bg-[#0668E166]"
              : "mb-sm grid p-xs  place-items-center rounded-full bg-[#edf5ff]"
          }
        >
          <Image
            src={card.icon}
            alt={card.label}
            width={58}
            height={58}
            className={isCenter
              ? "object-contain size-iconsize-2xl md:size-iconsize-xl":"object-contain size-iconsize-g scale-120"}
          />
        </div>

        {/* Label */}
        <p
          className={
            isCenter
              ? "mb-sm text-h5 font-bold"
              : "mb-sm text-h5 font-bold text-[#006bea]"
          }
        >
          {card.label}
        </p>

        {/* Title */}
        <h3
          className={
            isCenter
              ? "text-base font-bold leading-tight"
              : "text-base font-bold leading-tight"
          }
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className={
            isCenter
              ? "mt-sm text-xl font-medium px-md"
              : "mt-sm text-xl font-medium px-[8%]"
          }
        >
          {card.description}
        </p>
      </article>
    );
  })}
</div>

     
{/* Bottom message */}
        <div className="mt-lg flex flex-col items-center justify-center gap-xs rounded-md border text-[#0668E1] bg-[#EEF6FF] border-[#B2D0F6] p-sm text-center">
          <strong className="text-xl font-bold">
            UNDERSTANDING · INTENTION · ACTION
          </strong>

          <span className="text-xl font-medium">
            Every hiring response reflects how Head, Heart, and Hand work together.
          </span>
        </div>
      </div>
    </section>
  );
}