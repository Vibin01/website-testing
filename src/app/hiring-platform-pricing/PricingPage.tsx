import PricingCard from "./PricingCard";
import InterventionTimeSection from "./InterventionTimeSection";
import { GoArrowRight } from "react-icons/go";
import { GradientButton } from "@/components/common/Button/GradientButton";
export default function PricingPage() {
  // const [yearlyPlan, setYearlyPlan] = useState(false);
  return (
    <main className=" py-[10%] md:py-0 flex flex-col items-center justify-center ">
      <div className="px-[5%] mt-[5%] py-[5%] md:w-[80%]  text-center">
        <h1 className="text-center text-h1 font-extrabold text-[#0668E1] leading-tight">
          Choose How Early You Want to
          <span className="block">See—and Act.</span>
        </h1>

        <p className="mt-md text-base font-medium text-[#2C2C2C] text-center mx-auto leading-relaxed">
          Start free with hiring visibility. Add deeper diagnosis and earlier intervention
          as your organization&rsquo;s needs evolve.
        </p>

        <div className="mt-xl flex items-center justify-center gap-md  text-h5 font-bold text-[#1B1C17]">
          <span>See</span>
          <span className="font-medium text-[#1B1C17]"><GoArrowRight className="size-iconsize-sm stroke-1"/></span>
          <span>Understand</span>
          <span className="font-medium text-[#1B1C17]"><GoArrowRight className="size-iconsize-sm stroke-1"/></span>
          <span>Act</span>
        </div>
      </div>
      <div className="w-full px-[5%]">
        <div className="pt-[10%] lg:pt-[4%] w-full">
          <div className="flex flex-col gap-sm lg:gap-px lg:flex-row items-center lg:items-stretch lg:justify-around">
            <PricingCard />
          </div>
          <InterventionTimeSection />
        </div>
      </div>
      <div className="w-full border border-[#0668E1] my-[7%]" />


      {/* Bottom CTA Banner */}
      <div className="w-full px-[5%] pb-[8%]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-h5 font-bold text-[#1B1C17] leading-tight">
              Begin with visibility. Upgrade when your needs grow.
            </h3>
            <p className="mt-md text-xl font-medium leading-relaxed">
              Employer plans apply to the organization workspace.
              <br className="hidden sm:inline" />
              {" "}The Connect EC app remains free for candidates and recruiters.
            </p>
          </div>

          <GradientButton text="Unlock Connect EC for Free"/> 
        </div>
      </div>
    </main>
  );
}
