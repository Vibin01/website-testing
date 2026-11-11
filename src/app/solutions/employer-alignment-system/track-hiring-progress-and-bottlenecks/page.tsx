import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import SolutionBannerSection from "../../SolutionBannerSection";
import { HeroSection } from "../../HeroSection";
import { FeedbackChallenge } from "../../FeedbackChallenge";
import FeedbackAlignment from "../../FeedbackAlignment";
import FeedbackFlow from "../../FeedbackFlow";
import ImpactSection from "@/components/common/ImpactSection";
import { easyRoleTracker } from "@/data/EmployerSolutionPageData";

export const metadata = {
  title: "Track Hiring Progress and Fix Pipeline Bottlenecks | Connect EC",
  description:
    "Monitor hiring progress, identify bottlenecks, and improve recruitment efficiency with Connect EC.",
};

const page = () => {
  return (
    <section className="relative">
      <div className="pt-[10%] md:pt-0">
        <div className="relative">
          <section className="relative mt-[5%] md:mt-0 flex items-center justify-center py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
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
            <HeroSection
              title={easyRoleTracker.title}
              description={easyRoleTracker.description}
              subTitle={easyRoleTracker.subTitle}
            />
          </section>
        </div>
        <div className="bg-[#F2F8FF]">
          <section className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <FeedbackChallenge data={easyRoleTracker.feedbackChallengeData} />
          </section>
        </div>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackAlignment data={easyRoleTracker.feedbackAlignmentData} />
          <section className="relative py-[3%]">
            <SolutionBannerSection data={easyRoleTracker.bannerData} />
          </section>
        </section>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackFlow data={easyRoleTracker.feedbackFlowData} />
        </section>
      </div>

      <div>
        <section className="relative">
          <ImpactSection data={easyRoleTracker.impactData} />
        </section>
      </div>

      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%]">
          <OutcomeHighlightSection data={easyRoleTracker.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;

