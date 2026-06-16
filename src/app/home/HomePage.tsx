import React from "react";
import { HeroSection } from "./HeroSection";
import AlignmentChallenge from "./AlignmentChallenge";
import FlowCards from "./FlowCards";
import HiringSeams from "./HiringSeams";
import AlignmentCompoundsSection from "./AlignmentComponentSection";
import ClosingVisionGapCard from "./CloseVissonGapCard";
import AAAActionBanner from "./AAAActionBanner";
import AlignmentBreaksDiagram from "./AlignmentBreaksDiagram";
import StrategyGapSection from "./StrategyGapSection";
import UniversalBehaviorSection from "./UniversalBehaviorSection";
import AspirationToAchievementSection from "./AspirationToAchievementSection";
import AAABehaviouralFramework from "./AAABehaviouralFramework";
import AlignmentTabWithinAcrossComponent from "./AlignmentTabWithinAcrossComponent";

export const HomePage = () => {
  return (
    <>
      <main className="px-[5%] overflow-x-hidden">
        <div className=" -mx-[7%] bg-[url('/background/bg-hero-home-section-mobile.svg')] sm:bg-[url('/background/bg-hero-home-section.svg')] bg-no-repeat bg-cover bg-center">
          <HeroSection />
        </div>
        <div className="py-[5%] -mx-[7%] md:-mx-0 ">
          <FlowCards />
        </div>

        {/* <div className="mt-[5%] md:mt-0 py-[5%]">
          <AlignmentChallenge />
        </div> */}

        <div className="mt-[5%] md:mt-0 py-[5%]">
          <HiringSeams />
        </div>
        <div className="mt-[5%] md:mt-0">
          <AlignmentBreaksDiagram />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
          <StrategyGapSection />
        </div>

        <div className="py-[5%]  ">
          <UniversalBehaviorSection />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
          <AAABehaviouralFramework />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
          <AAAActionBanner />
        </div>
        <div className="mt-[5%] md:mt-0">
          <ClosingVisionGapCard />
        </div>
        <div>
          <AlignmentCompoundsSection />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%] mb-[15%] md:mb-0">
          <AspirationToAchievementSection />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%] mb-[15%] md:mb-0">
          <AlignmentTabWithinAcrossComponent />
        </div>
      </main>
    </>
  );
};
