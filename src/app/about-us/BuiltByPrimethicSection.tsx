import Image from "next/image";
import React from "react";

export default function BuiltByPrimethicSection() {
  return (
    <section
      id="built-by-primethic"
      className="w-full bg-[#0668E1] text-white overflow-hidden"
    >
      <div className="mx-auto px-[5%] py-[10%] md:py-[6%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <p className="text-xl font-bold tracking-wider text-white uppercase mb-xs">
              BUILT BY PRIMETHIC
            </p>

            {/* Main Title */}
            <h2 className="text-h2 font-extrabold text-white leading-tight mb-xs">
              Built on
              <br className="hidden sm:inline" />
              {" "}Alignment Continuity.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base font-medium text-white mb-md">
              Connect EC® is a product of Primethic Private Limited.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base font-medium text-white ">
              Primethic developed the Theory of Alignment Continuity and its
              proprietary Alignment Architecture to understand how alignment can
              be recognized, evaluated and sustained through change.
            </p>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#DEEDFF] my-md" />

            {/* Applied Subsection */}
            <div>
              <p className="text-base font-bold tracking-wider text-white uppercase mb-1.5 md:mb-2">
                APPLIED
              </p>
              <p className="text-base font-medium text-white leading-snug">
                Connect EC applies these principles to hiring.
              </p>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px]">
              <Image
                src="/about/alignment-restore.svg"
                alt="Connect EC Application Preview"
                width={360}
                height={450}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { BuiltByPrimethicSection as BuiltOnAlignmentContinuitySection };
