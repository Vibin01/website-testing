"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VscArrowBoth } from "react-icons/vsc";

const roles = ["Candidates", "Recruiters", "Employers"];

export default function AlignmentTabWithinAcrossComponent() {
  const [activeRole, setActiveRole] = useState("");

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
          {roles.map((role, index) => (
            <div key={role} className="flex items-center flex-1 w-full md:w-auto">
              <button
                onClick={() => setActiveRole(role)}
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
                <span>{role}</span>

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
              </button>

              {index < roles.length - 1 && (
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
          {roles.map((role, index) => (
            <div key={role} className="flex flex-col md:flex-row items-center w-full md:w-auto flex-1">
              <button
                onClick={() => setActiveRole(role)}
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
                <span>{role}</span>

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
              </button>

              {index < roles.length - 1 && (
                <VscArrowBoth className="size-iconsize-sm rotate-90 md:rotate-0 my-sm font-medium mx-md" />
              )}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
