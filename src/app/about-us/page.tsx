import React from "react";
import BuiltByPrimethicSection from "./BuiltByPrimethicSection";
import SystemsRespondWhenPeopleChangeSection from "./SystemsRespondWhenPeopleChangeSection";
import ChangeIsInevitableSection from "./ChangeIsInevitableSection";
import WhyConnectECExistsSection from "./WhyConnectECExistsSection";
import OneHiringSystemSection from "./OneHiringSystemSection";
import UnseenMovementSection from "./UnseenMovementSection";
import AboutUsHeroSection from "./AboutUsHeroSection";
import OutcomeHappensLastSection from "./OutcomeHappensLastSection";

export const metadata = {
  title: "Bringing Clarity and Predictability to Hiring | Connect EC",
  description:
    "Connecting candidates, recruiters, and employers brings clarity, continuity, and predictability to the hiring journey. Restore hiring alignment with Connect EC.",
};

const Page = () => {
  return (
    <>
      <section className="relative">
        <div className="py-[10%] md:py-[8%] px-[5%]">
          <AboutUsHeroSection />
        </div>
        <div className="bg-[#F2F8FF]">
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <UnseenMovementSection />
            </section>
          </div>
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <OutcomeHappensLastSection />
            </section>
          </div>
        </div>

        <div className="py-[5%] md:py-0">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <ChangeIsInevitableSection />
          </section>
        </div>

        <div className="py-[5%] md:py-0">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <WhyConnectECExistsSection />
          </section>
        </div>

        <div className="py-[5%] md:py-0">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <OneHiringSystemSection />
          </section>
        </div>


        <div className="pt-[5%] md:pt-0">
          <BuiltByPrimethicSection />
        </div>

        <div className="bg-[#F2F8FF]">
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <SystemsRespondWhenPeopleChangeSection />

            </section>
          </div>
        </div>



      </section>
    </>
  );
};

export default Page;
