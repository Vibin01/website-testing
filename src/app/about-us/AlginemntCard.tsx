"use client";

import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { VscArrowBoth } from "react-icons/vsc";

const withinRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=candidate",
  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=recruiter",
  },
  {
    role: "Employers",
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

export default function AlignmentCards() {
  return (
    <div className="grid  md:grid-cols-[1fr_auto_1fr] gap-xl ">
      {/* ALIGNMENT WITHIN */}
      <div className="pr-xl">
        <div className="mb-md flex items-center">
          <h3 className="flex items-center text-base font-bold uppercase gap-sm">
            <span
              className="
                   rounded-sm
                   scale-90
                   size-iconsize-md
                   flex justify-center items-center
                  transition-all
                  bg-[#0668E1]

                "
            >
              <IoPersonSharp
                className="
                  scale-110
                    text-white
                  "
              />
            </span>
            Alignment Within
          </h3>
        </div>

        <p className="mb-sm text-base font-medium">
          Understand how decisions shift within hiring situations.
        </p>

        <div className="mb-sm flex items-center gap-xs md:gap-sm">
          {withinRoles.map((role, index) => (
            <div key={role.role} className="flex items-center gap-xs md:gap-sm">
              <Link
                href={role.url}
                className="
                  group
                  flex
                 flex-col
                  items-start
                  gap-xs
                  rounded-md
                  border
                  border-[#DEEDFF]
                  p-sm
                  shadow-[0px_2px_10px_2px_#0668E10D]
                 
                  transition-all
                  duration-300
                  hover:border-[#0668E1]
                  hover:text-[#0668E1]
                "
              >
                <div className="flex w-full items-center justify-between">
                  <img
                    src={role.img}
                    alt={role.role}
                    className="size-iconsize-sm scale-110"
                  />
                  <BsArrowUpRightCircleFill
                    className="
                    size-iconsize-sm
                    scale-85
                    opacity-0
                    
text-[#0668E1]
                    group-hover:opacity-100
                  "
                  />
                </div>
                <span className="text-xl font-medium">{role.role}</span>
              </Link>

              {index < acrossRoles.length - 1 && (
                <div className="w-iconsize-sm h-full flex justify-center items-center">
                  <span className="block bg-[#DEEDFF] h-[50px] md:h-iconsize-2xl w-[2px]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mb-sm text-base font-medium">
          Hiring outcomes depend on how each participant responds to changing
          hiring conditions.
        </p>

        <p className="text-base font-medium">
          Understanding these decision patterns creates Alignment Within.
        </p>
      </div>
      <div className=" bg-[#DEEDFF] w-full md:w-[2px] h-[2px] md:h-full " />
      {/* ALIGNMENT ACROSS */}
      <div>
        <div className="mb-md flex items-center">
          <h3 className="flex items-center text-base font-bold uppercase gap-sm">
            <span
              className="
                   rounded-sm
                   scale-90
                   size-iconsize-md
                   flex justify-center items-center
                  transition-all
                  bg-[#0668E1]

                "
            >
              <MdGroups
                className="
                  scale-110
                    text-white
                  "
              />
            </span>
            Alignment Across
          </h3>
        </div>

        <p className="mb-sm text-base font-medium">
          Maintain continuity across hiring interactions.
        </p>

        <div className="mb-sm flex items-center gap-xs md:gap-sm">
          {acrossRoles.map((role, index) => (
            <div key={role.role} className="flex items-center gap-xs md:gap-sm">
              <Link
                href={role.url}
                target="_blank"
                className={`${role.role === "Candidates" ? "pointer-events-none" : "cursor-pointer"}
                  group
                  flex
                 flex-col
                  items-start
                  gap-xs
                  rounded-md
                  border
                  border-[#DEEDFF]
                  p-sm
                  shadow-[0px_2px_10px_2px_#0668E10D]
                 
                  transition-all
                  duration-300
                  hover:border-[#0668E1]
                  hover:text-[#0668E1]
                `}
              >
                <div className="flex w-full items-center justify-between">
                  <img
                    src={role.img}
                    alt={role.role}
                    className="size-iconsize-sm scale-110"
                  />
                  <BsArrowUpRightCircleFill
                    className="
                    size-iconsize-sm
                    scale-85
                    opacity-0
                    
text-[#0668E1]
                    group-hover:opacity-100
                  "
                  />
                </div>
                <span className="text-xl font-medium">{role.role}</span>
              </Link>

              {index < acrossRoles.length - 1 && (
                            <PiArrowsLeftRightBold className="size-iconsize-sm my-sm font-medium text-[#B2D0F6] " />
             )}
            </div>
          ))}
        </div>

        <p className="mb-sm text-base font-medium">
          Hiring outcomes depend on how decisions remain connected across
          participants.
        </p>

        <p className="text-base font-medium">
          Maintaining visibility, continuity, and coordination creates Alignment
          Across.
        </p>
      </div>
    </div>
  );
}
