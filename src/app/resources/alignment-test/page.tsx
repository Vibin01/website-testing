import React from "react";
import AlignmentHero from "./AlignmentHero";
import AlignmentSituationsSection from "./AlignmentSituationSection";
import AlignmentWithinSection from "./AlignmentWithinSection";
import AlignmentTest from "./AlignmentTest";
import AlignmentModes from "./AlignmentModes";
import AlignmentRespont from "./AlignmentRespond";

export const metadata = {
  title: "Hiring Alignment Assessment for Candidates, Recruiters, and Employers | Connect EC",
  description:
    "A hiring alignment assessment reveals how decisions shift across uncertainty, pressure, control, perception, and outcomes. Explore real hiring scenarios with Connect EC.",
};

const page = () => {
  return (
    <div className="md:mt-0 overflow-x-hidden">
      <div className="py-[10%] md:py-[1%] px-[5%]  ">
        <AlignmentHero />
      </div>
      <div className="pt-[5%] px-[5%]">
        <AlignmentWithinSection />
      </div>
      <div className="pt-[5%]">
        <AlignmentTest />
      </div>
       <div className="pt-[5%]">
        <AlignmentModes />
      </div>
      <div className="pt-[5%] px-[5%] bg-[#F2F8FF]">
        <AlignmentRespont />
      </div>
     
    </div>
  );
};

export default page;
