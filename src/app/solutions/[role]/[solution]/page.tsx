import React from "react";

import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import { solutionPageMap } from "@/data/SolutionPageMap";
import InsightTabsSection from "../../InsightTabsSection";
import FeatureHighlightSection from "../../FeatureHighlightSection";
import AlignmentComparisonSection from "../../AlignmentComparisonSection";
import AlignmentSection from "../../AlignementSection";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    role: string;
    solution: string;
  }>;
};
type SolutionData = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  description: string;
  InsightTabItem: any;
  FeatureHighlightData: any;
  AlignmentComparisonData: any;
  AlignmentSectionData: any;
  outcomeHighlightData: any;
};

export async function generateMetadata({ params }: PageProps) {
  const { role, solution } = await params;

  const roleData =
    solutionPageMap[role as keyof typeof solutionPageMap];

const data = roleData?.[
  solution as keyof typeof roleData
] as SolutionData | undefined;

  if (!data) {
    return {
      title: "Not Found | Connect EC",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: `${data.metadata.title} | Connect EC`,
    description: data.metadata.description,
  };
}


export default async function Page({ params }: PageProps) {
  const { role, solution } = await params; 

  const roleData = solutionPageMap[role as keyof typeof solutionPageMap];

const data = roleData?.[
  solution as keyof typeof roleData
] as SolutionData | undefined;

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <section className="relative ">
      <div className="pt-[10%] md:pt-0">
        <div>
          <section className="mt-[10%] md:mt-0 relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <div className="flex flex-col items-center justify-center py-[5%]">
              <h1 className="text-h1 font-extrabold text-center text-[#0668E1]">
                {data.title}
              </h1>
              <h2 className="text-h2 font-extrabold text-center">
                {data.description}
              </h2>
                       <Link href={"https://play.google.com/store/apps/details?id=com.primethic.connectec"} target="_blank" className="w-fit mt-lg h-btn-h text-nowrap  bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
            <span className=" font-bold text-xl text-white">
              Unlock Connect EC for Free
            </span>

            <FaArrowRight className="text-white text-base" />
          </Link>
            </div>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <InsightTabsSection data={data.InsightTabItem} />
          </section>
        </div>
      </div>

      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%]">
          <FeatureHighlightSection data={data.FeatureHighlightData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <AlignmentComparisonSection data={data.AlignmentComparisonData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          {/* <InsightOutcomeSection data={data.InsightOutcomeData} /> */}
          <AlignmentSection data={data.AlignmentSectionData} />
        </section>
      </div>
      <div className="py-[5%] flex justify-center items-center">
      <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={data.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
}
