"use client";

import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, TriangleAlert } from "lucide-react";
import React from "react";
import { toast } from "sonner";


const withinRoles = [
  {
    role: "Candidates",
    roleId: "candidate",
    img: "/icons/candidate-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=candidate",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiters",
    roleId: "recruiter",
    img: "/icons/recruiter-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=recruiter",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Employers",
    roleId: "employer",
    img: "/icons/employer-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=employer",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];
const acrossRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
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
const mobileAcrossRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Employers",
    img: "/icons/employer-icon.svg",
    url:"",
    type: "toast",
  },
];


export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center px-[5%] sm:px-0 pt-[5%] pb-[15%] md:pb-[10%]">
      <div className="text-center w-full mt-[15%] md:mt-[5%]">
        <h1 className="font-extrabold text-h1 text-[#0668E1]">
          Hiring Alignment{" "}
          <span className="inline-flex  gap-xs">
            System
            <img
              src={"/icons/tm-badge.svg"}
              alt="tm-badge"
              className="size-iconsize-sm inline"
            />
          </span>
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
                        relative
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
            group-hover:pr-xl
          `}
                    >
                      <span className="font-medium text-xl group-hover:text-[#0066FF]">
                        {role.role}
                      </span>

                      <ArrowRight
                        className="
      absolute right-2
      text-[#0066FF]
      opacity-0
      
      transition-all duration-300
      group-hover:opacity-100
      group-hover:scale-85
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
          </TabsContent>
{/* mobile */}
           <TabsContent value="across" className="mt-xl md:hidden">
            <div className="flex justify-evenly items-center h-[clamp(80px,11vw,200px)]">
  {mobileAcrossRoles.map((role, index) => (
    <React.Fragment key={role.role}>
      {role.type === "toast" ? (
        <button
          type="button"
          onClick={() =>
  toast.custom((t) => (
    <div className="relative flex  items-start gap-xs rounded-lg border border-[#F5C451] bg-white p-sm shadow-lg">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFF7DB]">
        <TriangleAlert className="size-iconsize-sm text-[#D99A00]" />
      </div>

      <div className="flex-1">
        <p className="text-base font-semibold text-[#222]">
          Desktop browser recommended
        </p>

        <p className="mt-1 text-[13px] font-medium leading-5 text-[#666]">
          For the best experience, please use a desktop browser to access the
          dashboard.
        </p>
      </div>

      <button
        onClick={() => toast.dismiss(t)}
        className="text-sm font-medium text-[#666] hover:text-[#222]"
      >
        ✕
      </button>
    </div>
  ))
}
          className="w-1/3 group flex flex-col items-center gap-sm cursor-pointer"
        >
          <img
            src={role.img}
            alt={role.role}
            className="
              size-iconsize-2xl
              transition-all
              scale-90
              duration-400
              group-hover:scale-105
            "
          />

          <div
            className="
              relative
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
              group-hover:pr-xl
            "
          >
            <span className="font-medium text-xl group-hover:text-[#0066FF]">
              {role.role}
            </span>

            <ArrowRight
              className="
                absolute right-2
                text-[#0066FF]
                opacity-0
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-85
              "
            />
          </div>
        </button>
      ) : (
        <Link
          href={role.url}
          target="_blank"
          className="w-1/3 group flex flex-col items-center gap-sm cursor-pointer"
        >
          <img
            src={role.img}
            alt={role.role}
            className="
              size-iconsize-2xl
              transition-all
              scale-90
              duration-400
              group-hover:scale-105
            "
          />

          <div
            className="
              relative
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
              group-hover:pr-xl
            "
          >
            <span className="font-medium text-xl group-hover:text-[#0066FF]">
              {role.role}
            </span>

            <ArrowRight
              className="
                absolute right-2
                text-[#0066FF]
                opacity-0
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-85
              "
            />
          </div>
        </Link>
      )}

      {index < mobileAcrossRoles.length - 1 && (
        <PiArrowsLeftRightBold className="size-iconsize-sm scale-125 font-medium text-[#B2D0F6]" />
      )}
    </React.Fragment>
  ))}
</div>
          </TabsContent>
{/* web */}
          <TabsContent value="across" className="mt-xl hidden md:flex flex-col">
            <div className="flex justify-evenly items-center h-[clamp(80px,11vw,200px)]">
              {acrossRoles.map((role, index) => (
                <React.Fragment key={role.role}>
                  <Link
                    href={role.url}
                    target="_blank"
                    className={`w-1/3 group flex flex-col items-center gap-sm cursor-pointer`}
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
                        relative
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
            group-hover:pr-xl
          `}
                    >
                      <span className="font-medium text-xl group-hover:text-[#0066FF]">
                        {role.role}
                      </span>

                      <ArrowRight
                        className="
      absolute right-2
      text-[#0066FF]
      opacity-0
      
      transition-all duration-300
      group-hover:opacity-100
      group-hover:scale-85
    "
                      />
                    </div>
                  </Link>

                  {index < acrossRoles.length - 1 && (
                    <PiArrowsLeftRightBold className="size-iconsize-sm scale-125 font-medium text-[#B2D0F6]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </TabsContent>

        </Tabs>

        <h2 className="text-h2 font-extrabold text-[#0668E1]  mt-xl pt-sm">
          <span className="inline-flex items-center gap-sm">
            <img
              src={"/icons/star-icon.svg"}
              alt="Star icon"
              className="size-iconsize-lg inline animate-pulse"
            />
            Alignment Intelligence
          </span>
        </h2>
      </div>
    </section>
  );
};
