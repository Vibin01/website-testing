import React from "react";

import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import { solutionPageMap } from "@/data/SolutionPageMap";
import { HeroSection } from "../../HeroSection";
import { FeedbackChallenge } from "../../FeedbackChallenge";
import FeedbackAlignment from "../../FeedbackAlignment";
import FeedbackFlow from "../../FeedbackFlow";
import ImpactSection from "@/components/common/ImpactSection";

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
  subTitle:string;
  feedbackChallengeData: any;
  feedbackAlignmentData: any;
  feedbackFlowData: any;
  impactData: any;
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
        <div className="relative">
    
          <section className="relative mt-[5%] md:mt-0 relative flex items-center justify-center py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
                   {/* Background */}
    <div
      className="
        absolute
        inset-x-0
        top-[90%]
        md:top-[80%]
        bottom-0
        bg-[#F2F8FF]
        rounded-t-[50%]
      "
    />
            <HeroSection title={data.title} description={data.description} subTitle={data.subTitle}/>
          </section>
        </div>
        <div className="bg-[#F2F8FF]">
          <section className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <FeedbackChallenge data={data.feedbackChallengeData}/>
          </section>
        </div>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackAlignment data={data.feedbackAlignmentData}/>
        </section>
      </div>
      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className=" relative py-[5%] px-[5%] ">
        <FeedbackFlow data={data.feedbackFlowData}/>
        </section>
      </div>
      <div className="">
                <section className="relative">
                  <ImpactSection data={data.impactData} />
                </section>
              </div>

      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={data.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
}
