import HeroTextContainerSection from "@/components/common/HeroTextContainerSection";
import {
  employerAlignmentSystemData,
  employerContinuityData,
  employerFaqs,
  employerImpactData,
  HeroData,
  outcomeHighlightData,
  signalFlowData,
} from "@/data/EmployerPageData";
import SignalFlowSection from "@/components/common/SignalFlowSection";
import ImpactSection from "@/components/common/ImpactSection";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import FAQSection from "@/components/common/FAQSection";
import ContinuityBreaksSection from "../../components/common/ContinuityBreaksSection";
import AlignmentSystemSection from "@/components/common/AlignmentSystemSection";


export const EmployerPage = () => {
  return (
    <>
      <section className="relative overflow-x-hidden ">
        <section className="relative flex items-center justify-center bg-transparent">
          
    {/* Background */}
    <div
      className="
        absolute
        inset-x-0
top-[90%]
        md:top-[80%]
        bottom-0
        pointer-events-none
        bg-[#F2F8FF]
        rounded-t-[50%]
      "
    />
          <div className="mt-[5%] pt-[5%] pb-[15%] px-[5%]">
            <HeroTextContainerSection data={HeroData} />
          </div>
        </section>
        <div className="bg-[#F2F8FF]">
          <section className=" relative pb-[5%] px-[5%]- md:px-[7%]">
            <SignalFlowSection data={signalFlowData} />
          </section>
        </div>
        <div className="bg-[#F2F8FF]">
          <section className=" relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
            <ContinuityBreaksSection data={employerContinuityData} />
          </section>
        </div>

        <div className="bg-[#F2F8FF]">
          <section className="relative  py-[5%] px-[5%]">
            <AlignmentSystemSection data={employerAlignmentSystemData} />
          </section>
        </div>
        <div className="">
          <section className=" relative  ">
            <ImpactSection data={employerImpactData} />
          </section>
        </div>
        <div className="relative mt-[5%] md:mt-0 py-[5%] px-[5%]">
          <OutcomeHighlightSection data={outcomeHighlightData} />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
        </div>
        <div className="relative mt-[5%] md:mt-0 py-[5%] px-[5%]">
          <FAQSection data={employerFaqs} />
        </div>
      </section>
    </>
  );
};
