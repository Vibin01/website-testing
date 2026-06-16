"use client";

import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { VscArrowBoth } from "react-icons/vsc";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import React from "react";

const withinRoles = [
  {
    role: "Candidates",
    roleId: "candidate",
    img: "/icons/candidate-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=candidate",
  },
  {
    role: "Recruiters",
    roleId: "recruiter",
    img: "/icons/recruiter-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=recruiter",
  },
  {
    role: "Employers",
    roleId: "employer",
    img: "/icons/employer-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=employer",
  },
];
const acrossRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "https://candidate.connectec.app/register",
  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    url: "https://recruiter.connectec.app/register",
  },
  {
    role: "Employers",
    img: "/icons/employer-icon.svg",
    url: "https://employer.connectec.app/register",
  },
];

export const HeroSection = () => {
  return (
        <section className="flex items-center justify-center px-[5%] sm:px-0  pt-[32%] md:pt-[7%] pb-[12%]">
      <div className="text-center mt-[10%] md:mt-0 w-full">
        <h1 className="font-extrabold text-h1 text-[#0668E1]">
          Hiring Alignment System
        </h1>

        <h2 className="font-extrabold text-h2 pb-lg">
          Seamlessly Aligning Talent, Strategy, and Execution.
        </h2>

        <Tabs
          defaultValue="within"
          className="w-full sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50%] mx-auto"
        >
          <TabsList className="grid w-full mx-auto grid-cols-2 bg-transparent">
            <TabsTrigger
              value="within"
              className="flex items-center justify-center gap-xs cursor-pointer py-3 text-base font-bold border-b-2 border-[#EDEDED] data-[state=active]:text-[#0668E1] data-[state=active]:border-[#0668E1]"
            >
              <IoPersonSharp className="size-iconsize-sm" />
              Alignment Within
            </TabsTrigger>

            <TabsTrigger
              value="across"
              className="flex items-center justify-center gap-sm cursor-pointer  py-3 text-base font-bold border-b-2 border-[#EDEDED] data-[state=active]:text-[#0668E1] data-[state=active]:border-[#0668E1]"
            >
              <MdGroups className="size-iconsize-sm" />
              Alignment Across
            </TabsTrigger>
          </TabsList>

          <TabsContent value="within" className="mt-xl">
            <div className="flex justify-evenly items-center h-[clamp(80px,11vw,200px)]">
              {withinRoles.map((role, index) => (
                <React.Fragment key={role.role}>
                  <Link
                    href={role.url}
                    className="w-1/3 group flex flex-col items-center gap-sm cursor-pointer"
                  >
                    <img
                      src={role.img}
                      alt={role.role}
                      className={`
            size-iconsize-2xl
            transition-all
            scale-90
            duration-400
            group-hover:scale-105
          `}
                    />

                    <div
                      className={`
            mt-sm
            flex items-center gap-xs
            px-0 py-0
            rounded-sm
            border border-transparent
            bg-transparent
            transition-all
            duration-400
            group-hover:px-3
            group-hover:py-2
            group-hover:bg-white
            group-hover:border-[#0066FF]
            group-hover:scale-100
          `}
                    >
                      <span className="font-medium text-xl group-hover:text-[#0066FF]">
                        {role.role}
                      </span>

<ArrowRight
  className="
    size-iconsize-sm
    text-[#0066FF]
    opacity-0
    w-0
    -translate-x-2
    overflow-hidden
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:w-iconsize-sm
    group-hover:scale-85
    group-hover:translate-x-0
  "
/>
                    </div>
                  </Link>

                  {index < withinRoles.length - 1 && (
                    <div className="w-iconsize-sm h-full flex justify-center items-center">
                      <span className="block bg-[#DEEDFF] h-iconsize-2xl w-[2px]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-xl flex justify-center">
              <div className="border border-[#0668E1] rounded-md min-w-[85%] px-md py-sm bg-[#EEF6FF] text-[#0668E1] text-h6 font-medium">
                Discover your hiring alignment in real-world scenarios
              </div>
            </div>
          </TabsContent>

          <TabsContent value="across" className="mt-xl">
            <div className="flex justify-evenly items-center h-[clamp(80px,11vw,200px)]">
              {acrossRoles.map((role, index) => (
                <React.Fragment key={role.role}>
                  <Link href={role.url} target="_blank" 
                  className={`${role.role==="Candidates"?"pointer-events-none":"cursor-pointer"} w-1/3 group flex flex-col items-center gap-sm cursor-pointer`}>
                    <img
                      src={role.img}
                      alt={role.role}
                      className={`
            size-iconsize-2xl
            transition-all
             scale-90
            duration-400
            group-hover:scale-105
          `}
                    />

                    <div
                      className={`
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
          `}
                    >
                      <span className="font-medium text-xl group-hover:text-[#0066FF]">
                        {role.role}
                      </span>

                     <ArrowRight
  className="
    size-iconsize-sm
    text-[#0066FF]
    opacity-0
    w-0
    -translate-x-2
    overflow-hidden
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:w-iconsize-sm
    group-hover:scale-85
    group-hover:translate-x-0
  "
/>
                    </div>
                  </Link>

                  {index < acrossRoles.length - 1 && (
                    <VscArrowBoth className="size-iconsize-sm font-medium" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-xl flex justify-center">
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
