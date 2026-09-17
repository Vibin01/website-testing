import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import SolutionBannerSection from "../../SolutionBannerSection";
import { HeroSection } from "../../HeroSection";
import { FeedbackChallenge } from "../../FeedbackChallenge";
import FeedbackAlignment from "../../FeedbackAlignment";
import FeedbackFlow from "../../FeedbackFlow";
import ImpactSection from "@/components/common/ImpactSection";
import { easyFacilitator } from "@/data/EmployerSolutionPageData";

export const metadata = {
  title: "Improve Offer Acceptance to Joining and Reduce Dropouts | Connect EC",
  description:
    "Increase offer acceptance-to-joining rates and reduce hiring dropouts using Connect EC.",
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
              title={easyFacilitator.title}
              description={easyFacilitator.description}
              subTitle={easyFacilitator.subTitle}
            />
          </section>
        </div>
        <div className="bg-[#F2F8FF]">
          <section className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <FeedbackChallenge data={easyFacilitator.feedbackChallengeData} />
          </section>
        </div>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackAlignment data={easyFacilitator.feedbackAlignmentData} />
          <section className="relative py-[3%]">
            <SolutionBannerSection data={easyFacilitator.bannerData} />
          </section>
        </section>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackFlow data={easyFacilitator.feedbackFlowData} />
        </section>
      </div>

      <div>
        <section className="relative">
          <ImpactSection data={easyFacilitator.impactData} />
        </section>
      </div>

      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%]">
          <OutcomeHighlightSection data={easyFacilitator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
