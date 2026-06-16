import GoalsDiagram from "@/components/common/GoalDiagram";
import { FaArrowRight } from "react-icons/fa";

type Card = {
  textTop: string;
  textBottom: string;
  icon: string;
};

const cards: Card[] = [
  {
    textTop: "Candidates seek the",
    textBottom: "right opportunity.",
    icon: "/home/icons/right-opportunity-icon.svg",
  },
  {
    textTop: "Recruiters seek",
    textBottom: "successful placements.",
    icon: "/home/icons/successful-placements-icon.svg",
  },
  {
    textTop: "Employers seek",
    textBottom: "the right talent to be hired efficiently.",
    icon: "/home/icons/right-talent-icon.svg",
  },
];




export default function UniversalBehaviorSection() {
  return (
    <section className="relative  md:px-[5%]">
      <h2 className="text-h2 font-extrabold text-center mb-xl">
        The Universal Behaviour Principle
      </h2>
      <GoalsDiagram />

      <div className="flex justify-center items-center w-full">
        <img
          src={"/icons/double-arrow-icon.svg"}
          alt="double arrow icon"
          className="my-[6%]"
        />
      </div>
      <section className="mt-4 md:mt-0 relative flex justify-center">
        {/* Main Card */}
        <div className="relative w-full rounded-lg border border-[#D3E6FF]  p-xl text-center shadow-[0px_0px_40px_5px_#0668E11A]">
          {/* Top Badge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="min-w-[140px] md:min-w-[260px] rounded-full border border-[#D6E6FF] bg-[#FFFFFF] px-md py-md shadow-[0px_0px_40px_5px_#0668E11A]">
              <span className="text-xl font-bold">
                Same Aspiration
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="my-sm text-h2 font-extrabold text-[#0668E1] flex justify-center gap-xs">
            Everyone Aspires Seamless Yield <img src={"/icons/tm-badge.svg"} alt="tm-badge" className="size-[14px]"/>
          </h2>

          {/* Bottom Pill */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="min-w-[140px] md:min-w-[260px] rounded-full bg-[#0668E1] border border-[#D3E6FF] px-md py-md shadow-[0px_0px_40px_5px_#0668E11A]">
              <span className="text-xl font-bold text-white">
                Seamless Yield
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
