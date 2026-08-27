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
    <section className=" bg-white py-[5%]">
      <div className="mx-auto w-full px-[5%]">
        {/* Header */}
        <div className="text-center">
          <p className=" text-xl text-primary font-bold">
            ALIGNMENT WITHIN
          </p>

          <h1 className="text-h2 font-extrabold ">
            Head. Heart. Hand. In Harmony.
          </h1>

          <p className="mx-auto font-medium text-base">
            Alignment Within is the condition in which <span className="font-bold">understanding, intention, and action remain coherent as situations change.</span>
          </p>
        </div>

    <div className="mt-xl grid grid-cols-1 items-stretch gap-lg md:grid-cols-[1fr_1.1fr_1fr]">
  {alignmentCards.map((card) => {
    const isCenter = card.type === "center";

    return (
      <article
        key={card.id}
        className={
          isCenter
            ? "flex scale-105 flex-col items-center rounded-md bg-[linear-gradient(183.87deg,#0075FF_30.37%,#004BA6_80.69%)] p-md text-center text-white shadow-web-medium"
            : "flex  flex-col items-center justify-between rounded-md border border-[#DEEDFF] bg-white p-md text-center shadow-web-medium"
        }
      >
        
          <Image
            src={card.icon}
            alt={card.label}
            width={58}
            height={58}
            className={isCenter
              ? "object-contain size-iconsize-2xl scale-125 ":"object-contain size-iconsize-2xl "}
          />

        {/* Label */}
        <p
          className={
            isCenter
              ? "mb-1 mt-xs text-h5 font-bold"
              : "mb-1 mt-xs text-h5 font-bold text-[#006bea]"
          }
        >
          {card.label}
        </p>

        {/* Title */}
        <h2
          className={
            isCenter
              ? "text-base font-bold"
              : "text-base font-bold"
          }
        >
          {card.title}
        </h2>

        {/* Description */}
        <p
          className={
            isCenter
              ? "mt-1 text-xl font-medium px-md"
              : "mt-1 text-xl font-medium px-[8%]"
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
          <strong className="text-base font-bold">
            UNDERSTANDING · INTENTION · ACTION
          </strong>

          <span className="text-base font-medium">
            Every hiring response reflects how Head, Heart, and Hand work together.
          </span>
        </div>
      </div>
    </section>
  );
}