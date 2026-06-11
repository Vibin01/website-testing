"use client";

import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { VscArrowBoth } from "react-icons/vsc";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center px-[5%] sm:px-0 py-[12%]">
      <div className="text-center mt-[10%] md:mt-0 w-full">
        <h1 className="font-extrabold text-h1 text-[#0668E1]">
          Hiring Alignment System
        </h1>

        <h2 className="font-extrabold text-h2 pb-lg">
          Seamlessly Aligning Talent, Strategy, and Execution.
        </h2>

        <Tabs defaultValue="across" className="w-full sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
          <TabsList className="grid w-full mx-auto grid-cols-2 bg-transparent">
            <TabsTrigger
              value="within"
              className="flex items-center justify-center gap-xs  py-3 text-base font-bold border-b-2 border-[#EDEDED] data-[state=active]:text-[#0668E1] data-[state=active]:border-[#0668E1]"
            >
              <IoPersonSharp className="size-iconsize-sm" />
              Alignment Within
            </TabsTrigger>

            <TabsTrigger
              value="across"
              className="flex items-center justify-center gap-sm  py-3 text-base font-bold border-b-2 border-[#EDEDED] data-[state=active]:text-[#0668E1] data-[state=active]:border-[#0668E1]"
            >
              <MdGroups className="size-iconsize-sm" />
              Alignment Across
            </TabsTrigger>
          </TabsList>

          <TabsContent value="within" className="mt-xl">
            <div className="flex justify-evenly items-center  h-[clamp(80px,11vw,200px)]  ">
              <div className=" w-1/3 group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/candidate-icon.svg"
                  alt="candidate"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-110
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-100
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Candidates
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90 
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>

<div className="w-iconsize-sm h-full flex justify-center items-center ">
              <span className="block bg-[#DEEDFF] h-iconsize-2xl w-[2px] " />
</div>
               <div className=" w-1/3  group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/recruiter-icon.svg"
                  alt="Recruiter"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-125
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-105
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Recruiter
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>

            <div className="w-iconsize-sm h-full flex items-center justify-center ">
              <span className=" block bg-[#DEEDFF] h-iconsize-2xl w-[2px] " />
</div>
               <div className=" w-1/3  group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/employer-icon.svg"
                  alt="Employer"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-125
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-105
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Employer
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="border border-[#0668E1] rounded-md min-w-[85%] px-md py-sm bg-[#EEF6FF] text-[#0668E1] text-h6 font-medium">
                Discover your hiring alignment in real-world scenarios
              </div>
            </div>
          </TabsContent>

          <TabsContent value="across" className="mt-xl">
            <div className="flex justify-evenly items-center  h-[clamp(80px,11vw,200px)]  ">
              <div className=" w-1/3 group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/candidate-icon.svg"
                  alt="candidate"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-110
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-100
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Candidates
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90 
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>

                            <VscArrowBoth className="size-iconsize-sm font-medium" />


               <div className=" w-1/3  group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/recruiter-icon.svg"
                  alt="Recruiter"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-125
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-105
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Recruiter
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>

                            <VscArrowBoth className="size-iconsize-sm font-medium" />


               <div className=" w-1/3  group flex flex-col items-center gap-sm cursor-pointer">
                <img
                  src="/icons/employer-icon.svg"
                  alt="Employer"
                  className="
      size-iconsize-2xl
      transition-all
      duration-400
      group-hover:scale-125
    "
                />

                <div
                  className="
                  mt-sm
      flex items-center gap-xs
      px-0 py-0
      rounded-sm
      border border-transparent
      bg-transparent

      transition-all
      duration-400

      group-hover:px-4
      group-hover:py-2
      group-hover:bg-white
      group-hover:border-[#0066FF]
      group-hover:scale-105
    "
                >
                  <span className="font-medium text-base  group-hover:text-[#0066FF]">
                    Employer
                  </span>

                  <ArrowRight
                    className="
        size-iconsize-sm scale-90
        text-[#0066FF]
        opacity-0
        -translate-x-2
        transition-all
        duration-400

        group-hover:opacity-100
        group-hover:translate-x-0
      "
    />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="border border-[#0668E1] rounded-md min-w-[85%] py-sm bg-[#EEF6FF] text-[#0668E1] text-h6 font-medium">
                Experience alignment across the hiring ecosystem.
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <p className="font-medium text-h6 pb-md mt-xl">When aligned</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-sm">
          <div className="flex-[0.2] min-w-[200px] p-sm bg-white border border-[#D0E5FF] rounded-md flex  items-center gap-xs">
            <div className="size-iconsize-md scale-85 text-[#0668E1]">
              <img
                src="/home/icons/faster-hiring-decisions-through-alignment.svg"
                alt="Aligned hiring signals helping decisions move faster across the hiring process"
                className="w-full h-auto"
              />
            </div>

            <p className="font-bold text-base text-[#0668E1] text-nowrap">
              Decisions accelerate
            </p>
          </div>

          <div className="flex-[0.2] min-w-[240px] p-sm bg-white border border-[#D0E5FF] rounded-md flex items-center gap-xs">
            <div className="size-iconsize-md scale-85 text-[#0668E1]">
              <img
                src="/home/icons/hiring-momentum-strengthens-with-alignment.svg"
                alt="Hiring momentum strengthening through coordinated decisions and execution"
                className="w-full h-auto"
              />
            </div>

            <p className="font-bold text-base text-[#0668E1] text-nowrap">
              Momentum strengthens
            </p>
          </div>

          <div className="flex-[0.2] min-w-[200px] p-sm bg-white border border-[#D0E5FF] rounded-md flex items-center gap-xs">
            <div className="size-iconsize-md scale-85 text-[#0668E1]">
              <img
                src="/home/icons/compounding-hiring-outcomes-through-alignment.svg"
                alt="Compounding hiring outcomes created through consistent alignment and execution"
                className="w-full h-auto"
              />
            </div>

            <p className="font-bold text-base text-[#0668E1] text-nowrap">
              Yield compounds
            </p>
          </div>
        </div>

        <p className="font-medium text-h6 mt-md">
          That state is{" "}
          <span className="italic font-bold text-[#0668E1]">
            Seamless Yield
          </span>
        </p>

        <p className="font-bold text-h6 mt-md">Everyone aspires to it.</p>
      </div>
    </section>
  );
};
