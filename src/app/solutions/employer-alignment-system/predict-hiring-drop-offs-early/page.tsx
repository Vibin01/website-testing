import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import SolutionBannerSection from "../../SolutionBannerSection";
import PredictorHeroSection from "./PredictorHeroSection";
import { FeedbackChallenge } from "../../FeedbackChallenge";
import FeedbackAlignment from "../../FeedbackAlignment";
import FeedbackFlow from "../../FeedbackFlow";
import ImpactSection from "@/components/common/ImpactSection";
import { easyPredictor } from "@/data/EmployerSolutionPageData";

export const metadata = {
  title: "Predict Hiring Drop-Offs Early | Connect EC",
  description:
    "Detect hiring drop-offs early and take proactive actions to improve hiring outcomes with Connect EC.",
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
            <PredictorHeroSection
              title={easyPredictor.title}
              description={easyPredictor.description}
              subTitle={easyPredictor.subTitle}
            />
          </section>
        </div>
        <div className="bg-[#F2F8FF]">
          <section className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <FeedbackChallenge data={easyPredictor.feedbackChallengeData} />
          </section>
        </div>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackAlignment data={easyPredictor.feedbackAlignmentData} />
          <section className="relative py-[3%]">
            <SolutionBannerSection data={easyPredictor.bannerData} />
          </section>
        </section>
      </div>

      <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
        <section className="relative py-[5%] px-[5%]">
          <FeedbackFlow data={easyPredictor.feedbackFlowData} />
        </section>
      </div>

      <div>
        <section className="relative">
          <ImpactSection data={easyPredictor.impactData} />
        </section>
      </div>

      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%]">
          <OutcomeHighlightSection data={easyPredictor.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;

