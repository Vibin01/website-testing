"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VscArrowBoth } from "react-icons/vsc";
import Link from "next/link";

const withinRoles = [{role:"Candidates",img:"/icons/candidate-icon.svg",url:"/resources/alignment-test/register?mode=single&phase=uncertainty"},{role: "Recruiters",img:"/icons/recruiter-icon.svg", url:"/resources/alignment-test/register?mode=single&phase=uncertainty"}, {role:"Employers",img:"/icons/employer-icon.svg",url:"/resources/alignment-test/register?mode=single&phase=uncertainty"}];
const acrossRoles = [{role:"Candidates",img:"/icons/candidate-icon.svg",url:"https://candidate.connectec.app/register"}, {role:"Recruiters",img:"/icons/recruiter-icon.svg", url:"https://recruiter.connectec.app/register"}, {role:"Employers",img:"/icons/employer-icon.svg",url: "https://employer.connectec.app/register"}];


export default function AlignmentTabWithinAcrossComponent() {

  return (
    <Tabs defaultValue="within" className="w-full md:px-[5%]">
      {/* Top Tabs */}
      <TabsList className="w-full grid grid-cols-2 ">
        <TabsTrigger
          value="within"
          className="
    group
    rounded-none
    flex
    items-start
    md:items-center
    gap-sm
    py-sm
    border-b-2
    border-[#EBEBEB]
    text-base
    font-bold
    text-start

    data-[state=active]:border-[#0668E1]
    data-[state=active]:text-[#0668E1]
    data-[state=active]:shadow-none
  "
        >
          <div
            className="
       rounded-sm
       size-iconsize-lg
       flex justify-center items-center
      transition-all
      bg-[#EBEBEB]
      group-data-[state=active]:bg-[#0668E1]
    "
          >
            <IoPersonSharp
              className="
      scale-110
        group-data-[state=active]:text-white
      "
            />
          </div>
          Alignment Within
        </TabsTrigger>

        <TabsTrigger
          value="across"
          className="
    group
    rounded-none
    flex
    md:items-center
    gap-sm
    py-sm
    border-b-2
    border-[#EBEBEB]
    text-base
    font-bold
text-start
    data-[state=active]:border-[#0668E1]
    data-[state=active]:text-[#0668E1]
    data-[state=active]:shadow-none
  "
        >
          <div
            className="
       rounded-sm
       size-iconsize-lg
       flex justify-center items-center
      transition-all
      bg-[#EBEBEB]
      group-data-[state=active]:bg-[#0668E1]
    "
          >
            <MdGroups
              className="
      scale-110
        group-data-[state=active]:text-white
      "
            />
          </div>
          Alignment Across
        </TabsTrigger>
      </TabsList>

      {/* WITHIN */}
      <TabsContent value="within" className="mt-lg">
        <div className="flex flex-col sm:flex-row items-center gap-lg sm:gap-0 ">
          {withinRoles.map((role, index) => (
            <div key={role.role} className="flex items-center flex-1 w-full md:w-auto">
              <Link
              href={role.url}
                className={`
            group
            w-full
            h-btn-h
            rounded-md
            border
            border-[#DEEDFF]
            hover:border-[#0668E1]
            hover:text-[#0668E1]
            bg-white
            flex
            items-center
            justify-center
            gap-sm
            text-base
            font-medium
            transition-all
            duration-300
hover:font-bold


          `}
              >
                <span>{role.role}</span>

                <ArrowRight
                  className={`
              size-iconsize-sm 
              scale-90
              stroke-3
              transition-all
              duration-300

              opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
            `}
                />
              </Link>

              {index < withinRoles.length - 1 && (
                <div className="hidden  w-iconsize-sm h-full md:flex justify-center items-center mx-md ">
                  <span className="block bg-[#DEEDFF] h-iconsize-md w-[2px] " />
                </div>
              )}
            </div>
          ))}
        </div>
      </TabsContent>

      {/* ACROSS */}
      <TabsContent value="across" className="mt-md">
        <div className="flex flex-col md:flex-row items-center  ">
          {acrossRoles.map((role, index) => (
            <div key={role.role} className="flex flex-col md:flex-row items-center w-full md:w-auto flex-1">
              <Link
              href={role.url}
              target="_blank"
                className={`
                  ${role.role==="Candidates"?"pointer-events-none":"cursor-pointer"}
            group
            w-full
            h-btn-h
            rounded-md
            border
            border-[#DEEDFF]
            hover:border-[#0668E1]
            hover:text-[#0668E1]
            bg-white
            flex
            items-center
            justify-center
            gap-sm
            text-base
            font-medium
            transition-all
            duration-300
hover:font-bold


          `}
              >
                <span>{role.role}</span>

                <ArrowRight
                  className={`
              size-iconsize-sm 
              scale-90
              stroke-3
              transition-all
              duration-300

              
            opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
              
            `}
                />
              </Link>

              {index < acrossRoles.length - 1 && (
                <VscArrowBoth className="size-iconsize-sm rotate-90 md:rotate-0 my-sm font-medium mx-md" />
              )}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
