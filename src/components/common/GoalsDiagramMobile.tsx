"use client";

import { ArcherContainer, ArcherElement } from "react-archer";
import GoalCard from "./GoalCard";
import { useEffect } from "react";

export default function GoalsDiagramMobile() {
 useEffect(() => {
  console.log("candidate", document.getElementById("candidate-mobile"));
  console.log("employer", document.getElementById("employer-mobile"));
  console.log("goals", document.getElementById("goals-mobile"));
}, []);
  return (
    <ArcherContainer
      strokeColor="#B8D3FF"
      strokeWidth={3}
      endMarker={false}
    >
      <div className="rounded-lg bg-[#F1F7FF] px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Recruiter */}
          <ArcherElement
            id="recruiter-mobile"
            relations={[
              {
                targetId: "candidate-mobile",
                sourceAnchor: "right",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "angle",
                },
              },
              {
                targetId: "employer-mobile",
                sourceAnchor: "left",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "angle",
                },
              },
            ]}
          >
            <div className="mb-8">
              <GoalCard
                title="Recruiters"
                position="middle"
                description="Seek successful placements."
                icon="recruiter"
              />
            </div>
          </ArcherElement>

          {/* Row */}
          <div className="flex w-full justify-between">
            <ArcherElement
              id="candidate-mobile"
              relations={[
                {
                  targetId: "goals-mobile",
                  sourceAnchor: "bottom",
                  targetAnchor: "left",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "angle",
                  },
                },
              ]}
            >
                <div>
              <GoalCard
                title="Candidates"
                position="left"
                description="Seek the right opportunity."
                icon="candidate"
              />
              </div>
            </ArcherElement>

            <ArcherElement
              id="employer-mobile"
              relations={[
                {
                  targetId: "goals-mobile",
                  sourceAnchor: "bottom",
                  targetAnchor: "right",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "angle",
                  },
                },
              ]}
            >
                <div>
              <GoalCard
                title="Employers"
                position="right"
                description="Seek efficient Talent acquisition."
                icon="employer"
              />
              </div>
            </ArcherElement>
          </div>

          <div className="mt-12">
            <ArcherElement id="goals-mobile">
              <div className="flex py-md min-w-[140px] items-center justify-center rounded-full bg-white text-[13px] font-bold border border-[#DEEDFF] shadow-[0px_0px_40px_5px_#0668E11A]">
                Different goals
              </div>
            </ArcherElement>
          </div>
        </div>
      </div>
    </ArcherContainer>
  );
}