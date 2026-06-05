"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {  useState } from "react";

type SolutionSubPage = {
  title: string;
  description: string;
  href: string;
};

type SolutionGroup = {
  key: string;
  label: string;
  icon: string;
  pages: SolutionSubPage[];
};

const solutionGroups: SolutionGroup[] = [
  {
    key: "candidate",
    label: "Candidate",
    icon: "/solutions/candidate-icon.svg",
    pages: [
      {
        title: "Easy Evaluator",
        description: "The Feedback Transparency System.",
        href: "/solutions/candidate/easy-evaluator",
      },
      {
        title: "Easy Facilitator",
        description: "The Offer Decision System.",
        href: "/solutions/candidate/easy-facilitator",
      },
      {
        title: "Easy Scheduler",
        description: "The Interview Coordination System.",
        href: "/solutions/candidate/easy-scheduler",
      },
      {
        title: "Easy Reviewer",
        description: "The Employer Insight System.",
        href: "/solutions/candidate/easy-reviewer",
      },
    ],
  },
  {
    key: "recruiter",
    label: "Recruiter",
    icon: "/solutions/recruiter-icon.svg",
    pages: [
      {
        title: "Easy Evaluator",
        description: "Interview Evaluation System.",
        href: "/solutions/recruiter/easy-evaluator",
      },
      {
        title: "Easy Facilitator",
        description: "The Offer Decision System.",
        href: "/solutions/recruiter/easy-facilitator",
      },
      {
        title: "Easy Scheduler",
        description: "The Interview Coordination System.",
        href: "/solutions/recruiter/easy-scheduler",
      },
      {
        title: "Easy Predictor",
        description: "The Interview Transition System.",
        href: "/solutions/recruiter/easy-predictor",
      },
    ],
  },
  {
    key: "employer",
    label: "Employer",
    icon: "/solutions/employer-icon.svg",
    pages: [
      {
        title: "Easy Calibrator",
        description: "Transform Targets into Outcomes.",
        href: "/solutions/employer/easy-calibrator",
      },
      {
        title: "Easy Evaluator",
        description: "Transform Templates into Touchpoints.",
        href: "/solutions/employer/easy-evaluator",
      },
      {
        title: "Easy Explorer",
        description: "Transform Information into Insights.",
        href: "/solutions/employer/easy-explorer",
      },
      {
        title: "Easy Facilitator",
        description: "Transform Offer into Onboarding.",
        href: "/solutions/employer/easy-facilitator",
      },
      {
        title: "Easy Navigator",
        description: "Transform Declines into directions.",
        href: "/solutions/employer/easy-navigator",
      },
      {
        title: "Easy Predictor",
        description: "Transform No-shows into Know-shows.",
        href: "/solutions/employer/easy-predictor",
      },
      {
        title: "Easy Role Tracker",
        description: "Transform Inactive Pipeline into Active Progress.",
        href: "/solutions/employer/easy-role-tracker",
      },
    ],
  },
];

type SolutionsDropdownProps = {
  onClose: () => void;
};

export default function SolutionsDropdown({onClose}:SolutionsDropdownProps) {
  const [activeTab, setActiveTab] = useState<string>("recruiter");
  
  const activeGroup =
    solutionGroups.find((group) => group.key === activeTab) || solutionGroups[0];

  return (
    <div className="absolute left-0 top-full z-[9999] w-[100vw] -translate-x-1/2- rounded-b-[8px] border border-[#D3E6FF] bg-white p-[18px] shadow-[0px_10px_30px_rgba(6,104,225,0.12)]">
      <div className="grid grid-cols-[0.3fr_0.7fr] gap-md">
        {/* Left Menu */}
        <div className="border-r border-[#E5EEF9] pr-sm">
          <div className="space-y-xs">
            {solutionGroups.map((group) => {
              const isActive = activeTab === group.key;

              return (
                <button
                  key={group.key}
                  type="button"
                  onMouseEnter={() => setActiveTab(group.key)}
                  className={`flex w-full items-center justify-between rounded-sm p-sm text-left transition-all ${
                    isActive ? "bg-[#EAF3FF]" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-xs ">
                    <Image
                      src={group.icon}
                      alt={group.label}
                      width={20}
                      height={20}
                      className="size-iconsize-sm object-contain"
                    />
                    <span
                      className={`text-xl ${
                        isActive
                          ? "font-bold text-[#0668E1]"
                          : "font-medium text-[#1B1C17]"
                      }`}
                    >
                      {group.label}
                    </span>
                  </div>

                  {isActive && <ChevronRight className="size-iconsize-sm text-[#1B1C17]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-x-lg gap-y-sm">
          {activeGroup.pages.map((page,index) => (
            <Link
             key={`${page.href}-${index}`}
              href={page.href}
               onClick={onClose}
              className="rounded-md border border-transparent p-sm transition-all hover:border-[#D3E6FF] hover:bg-[#F7FBFF]"
            >
              <h3 className="text-base font-bold text-[#1B1C17] hover:text-[#0668E1]">
                {page.title}
              </h3>
              <p className="mt-xs text-xl font-medium text-[#4A4A4A]">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}