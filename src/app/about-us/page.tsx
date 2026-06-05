import React from "react";
import AlignmentWeakensSection from "./AlignmentWeaknesSection";
import AlignmentRestoreSection from "./AlignmentRestoreSection";
import WhatThisMeansSection from "./WhatThisMeanSection";

const Page = () => {
  return (
    <>
      <section className="relative ">
          <div className="py-[10%] md:py-[5%]">
            <section className="relative flex items-center justify-center py-[5%] px-[5%] bg-transparent">
              <div className="w-full flex flex-col gap-1 pb-14 lg:pb-0 items-center justify-center">
                <h1 className="mb-[0.5%] text-h1 font-extrabold text-[#0668E1]">
                  Connect EC
                </h1>
                <h2 className="mb-[2%] text-base font-bold text-center">
                  The Hiring Alignment System
                </h2>

                <p className="text-center text-base font-medium ">
                  Bringing clarity, continuity, and predictability
                  <br /> across candidates, recruiters, and employers.
                </p>
              </div>
            </section>
          </div>
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <AlignmentWeakensSection />
            </section>
          </div>
        <div className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%]">
          <section>
            <AlignmentRestoreSection />
          </section>
        </div>

        <div className="py-[5%] md:py-0">
          <section className="relative py-[5%] px-[5%]">
            <WhatThisMeansSection />
          </section>
        </div>

        <div className="bg-[#F7FBFF] px-[5%] py-[10%] md:py-[5%]">
          <section className="w-full ">
            <div className="mx-auto max-w-[900px] text-center">
              {/* Title */}
              <h2 className="text-h2 font-extrabold text-[#0668E1]">
                Our goal
              </h2>

              {/* Description */}
              <p className="mt-6 text-base md:leading-[34px] font-medium text-[#2C2C2C]">
                To make hiring a system where alignment holds—
                <br className="block" />
                so decisions, execution, and outcomes move together,
                <br className="block" />
                and outcomes become inevitable.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Page;
