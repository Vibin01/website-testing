import React from "react";
import EasyCalibrator from "./easyCalibrator";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyCalibrator } from "@/data/EmployerSolutionPageData";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import ComparisonCardSection from "../../ComparisonCardSection";
import SolutionBannerSection from "../../SolutionBannerSection";
import { HeroSection } from "../../HeroSection";
import { FeedbackChallenge } from "../../FeedbackChallenge";
import FeedbackAlignment from "../../FeedbackAlignment";
import FeedbackFlow from "../../FeedbackFlow";
import ImpactSection from "@/components/common/ImpactSection";

export const metadata = {
      title:
        "Improve Hiring Targets with Data-Driven Adjustments | Connect EC",
      description:
        "Achieve hiring targets faster with data-driven calibration and hiring optimization tools from Connect EC.",
    };

const page = () => {
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
               <HeroSection title={easyCalibrator.title} description={easyCalibrator.description} subTitle={easyCalibrator.subTitle}/>
             </section>
           </div>
           <div className="bg-[#F2F8FF]">
             <section className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <FeedbackChallenge data={easyCalibrator.feedbackChallengeData}/>
             </section>
           </div>
         </div>
   
         <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
           <section className="relative py-[5%] px-[5%]">
             <FeedbackAlignment data={easyCalibrator.feedbackAlignmentData}/>
              <section className="relative py-[3%]">
             <SolutionBannerSection data={easyCalibrator.bannerData} />
           </section>
           </section>
         </div>

         <div className="py-[5%] md:py-0 bg-[#F2F8FF]">
           <section className=" relative py-[5%] px-[5%] ">
           <FeedbackFlow data={easyCalibrator.feedbackFlowData}/>
           </section>
         </div>
         <div className="">
                   <section className="relative">
                     <ImpactSection data={easyCalibrator.impactData} />
                   </section>
                 </div>
   
         <div className="py-[5%] md:py-0">
           <section className=" relative py-[5%] px-[5%] ">
             <OutcomeHighlightSection data={easyCalibrator.outcomeHighlightData} />
           </section>
         </div>
       </section>
  );
};

export default page;
