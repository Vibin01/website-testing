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

const flowTexts = ["Different goals", "Same aspiration", "Seamless Yield"];

function CardItem({ item }: { item: Card }) {
  return (
    <div className="flex p-sm items-start sm:items-center gap-xs rounded-md border border-[#D3E6FF] bg-white shadow-[0px_0px_40px_5px_rgba(6,104,225,0.10)]">
      <div className="flex size-iconsize-lg p-[1%] items-center justify-center rounded-sm bg-[#E7F0FC]">
        <img src={item.icon} alt="Icon" className="size-full object-contain" />
      </div>

      <p className="text-base text-[#1B1C17]">
        <span className="font-medium">{item.textTop}</span>
        <br />
        <span className="font-bold">{item.textBottom}</span>
      </p>
    </div>
  );
}

function FlowSection() {
  return (
    <div className="mt-lg p-md flex w-full sm:w-[75%] flex-col items-center justify-center rounded-md bg-[#E7F0FC]">
      <div className="flex flex-col sm:flex-row items-center gap-sm md:gap-lg">
        {flowTexts.map((text, index) => (
          <div
            key={text}
            className="flex flex-col sm:flex-row items-center gap-sm md:gap-lg"
          >
            <span
              className={`${index !== flowTexts.length - 1 ? "font-medium" : "font-bold"} text-base`}
            >
              {text}
            </span>

            {index !== flowTexts.length - 1 && (
              <span className="rotate-90 sm:rotate-0 ">
                {" "}
                <FaArrowRight className="size-iconsize-sm scale-90" />
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-md text-h6 font-bold text-[#0668E1] text-center">
        Everyone Aspires Seamless Yield.
      </p>
    </div>
  );
}

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
            <div className="md:min-w-[250px] rounded-full border border-[#D6E6FF] bg-[#FFFFFF] px-md py-sm shadow-[0px_0px_40px_5px_#0668E11A]">
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
            <div className="md:min-w-[250px] rounded-full bg-[#0668E1] border border-[#D3E6FF] px-md py-sm shadow-[0px_0px_40px_5px_#0668E11A]">
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
