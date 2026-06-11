"use client";

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { VscArrowBoth } from "react-icons/vsc";

const withinRoles = [{role:"Candidates",img:"/icons/candidate-icon.svg"},{role: "Recruiters",img:"/icons/recruiter-icon.svg"}, {role:"Employers",img:"/icons/employer-icon.svg"}];
const acrossRoles = [{role:"Candidates",img:"/icons/candidate-icon.svg"}, {role:"Recruiters",img:"/icons/recruiter-icon.svg"}, {role:"Employers",img:"/icons/employer-icon.svg"}];

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
              <MdGroups
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
          {acrossRoles.map((role, index) => (
            <div key={role.role} className="flex items-center gap-xs md:gap-sm">
              <button
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
                  
                <img src={role.img} alt={role.role} className="size-iconsize-sm scale-110" />
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

                
              </button>

              {index < acrossRoles.length - 1 && (
                 <div className="  w-iconsize-sm h-full flex justify-center items-center">
                  <span className="inline-block bg-[#DEEDFF] h-iconsize-2xl w-[2px] " />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mb-sm text-base font-medium">
          Hiring outcomes depend on how each participant responds to changing hiring conditions.
        </p>

        <p className="text-base font-medium">
         Understanding these decision patterns creates Alignment Within.
        </p>
      </div>
<div className=" bg-[#DEEDFF] w-full md:w-[2px] h-[2px] md:h-full "/>
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
              <button
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
                  
                <img src={role.img} alt={role.role} className="size-iconsize-sm scale-110" />
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

                
              </button>

              {index < acrossRoles.length - 1 && (
                                <VscArrowBoth className="size-iconsize-sm font-medium" />
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
