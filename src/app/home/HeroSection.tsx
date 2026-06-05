
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
      <section className=" flex items-center justify-center px-[5%] sm:px-0 py-[10%]">
        <div className="text-center  mt-[10%] md:mt-0 ">
          <h1 className="font-extrabold text-h1 text-[#0668E1]">
           Hiring Alignment System
          </h1>

          <h2 className="font-extrabold text-h2 pb-lg">
            Seamlessly Aligning Talent, Strategy, and Execution.
          </h2>

          <p className="font-bold text-h6 pb-sm">
            When behaviors align
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-sm">
            <div className="flex-[0.2] min-w-[200px] md:min-w-auto w-auto  p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-md text-[#0668E1]">
                <img src="/home/icons/faster-hiring-decisions-through-alignment.svg" alt="Aligned hiring signals helping decisions move faster across the hiring process" className="w-full h-auto" />
              </div>

              <p className="font-bold text-base text-[#0668E1] text-nowrap ">
                Decisions accelerate
              </p>
            </div>

            <div className="flex-[0.2] min-w-[240px] md:min-w-auto w-auto  p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-lg text-[#0668E1]">
                <img src="/home/icons/hiring-momentum-strengthens-with-alignment.svg" alt="Hiring momentum strengthening through coordinated decisions and execution" className="w-full h-auto" />
              </div>

              <p className=" font-bold text-base text-[#0668E1] text-nowrap">
                Momentum strengthens
              </p>
            </div>

            <div className="flex-[0.2] min-w-[200px] md:min-w-auto w-auto p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-md text-[#0668E1]">
                <img src="/home/icons/compounding-hiring-outcomes-through-alignment.svg" alt="Compounding hiring outcomes created through consistent alignment and execution" className="w-full h-auto" />
              </div>

              <p className=" font-bold text-base text-[#0668E1] text-nowrap ">
                                Yield compounds

              </p>
            </div>
          </div>

          <p className=" font-medium text-h6 mt-sm">
            That state is <span className="italic font-bold">Seamless Yield</span>
          </p>

          <p className=" font-bold text-h6 mt-sm">
            Everyone aspires to it.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-sm px-sm sm:px-0  mt-sm">
            <button className="cursor-pointer h-btn-h text-nowrap  bg-[#0668E1] border-2 border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
              <span className=" font-bold text-xl text-white">
                Unlock Connect EC for Free
              </span>

              <FaArrowRight className="text-white text-base"/>
            </button>

            <Link href="/resources/alignment-test" className=" h-btn-h text-nowrap border-2 border-[#0668E1] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
              <span className=" font-bold text-xl text-[#0668E1]">
                Take Alignment Test for Free
              </span>

              <FaArrowRight className="text-[#0668E1] text-base"/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
