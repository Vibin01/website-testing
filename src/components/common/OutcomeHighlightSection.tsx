"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type OutcomeHighlightSectionData = {
  title: string;
  subtitle: string;
  points: string[];
  description?: string;
  description_top?: string;
  footerText: string;
  footerHighlight: string;
  footerSuffix: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomTitle?: string;
  bottomHighlight?: string;
};

interface OutcomeHighlightSectionProps {
  data: OutcomeHighlightSectionData;
}

export default function OutcomeHighlightSection({
  data,
}: OutcomeHighlightSectionProps) {
  const {
    title,
    subtitle,
    points,
    description,
    description_top,
    footerText,
    footerHighlight,
    footerSuffix,
    bottomTitle,
    bottomHighlight,
    image,
  } = data;

  const showBottomBlock = !!(bottomTitle && bottomHighlight);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid items-center gap-8 sm:grid-cols-[1.25fr_0.75fr]">
        {/* Left Content */}
        <div>
          <h2 className="text-h2 font-extrabold text-[#0668E1]">{title}</h2>

          <p className="mt-xs text-h6 font-bold mb-md">{subtitle}</p>

          {description_top && (
            <p className="text-base font-medium mt-md">{description_top} </p>
          )}
          <div className="mt-xs space-y-sm">
            <div className="space-y-[1.8%]">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-base font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base font-medium mt-md">{description} </p>

          <div className="mt-md">
            <p
              className={`text-base font-medium ${
                showBottomBlock ? "mt-1" : "mt-"
              }`}
            >
              {footerText}{" "}
              <span
                className={`font-bold ${!showBottomBlock ? "text-[#0668E1]" : ""} `}
              >
                {footerHighlight}{" "}
              </span>
              {!showBottomBlock && <br />}
              {footerSuffix}
            </p>

            {showBottomBlock && (
              <h3 className="text-h5 font-bold">
                {bottomTitle}{" "}
                <span className="text-[#0668E1]">{bottomHighlight}</span>
              </h3>
            )}
          </div>
          <button className=" mt-lg h-btn-h text-nowrap  bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
            <span className=" font-bold text-xl text-white">
              Unlock Connect EC for Free
            </span>

            <FaArrowRight className="text-white text-base" />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[90%]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
