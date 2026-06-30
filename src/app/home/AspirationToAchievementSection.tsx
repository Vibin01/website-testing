import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

type TopItem = {
  text: string;
};

const topItems: TopItem[] = [
  { text: "What candidates experience" },
  { text: "What employers require" },
  { text: "How recruiters operate" },
];

const flowSteps = [
  "Expectation becomes visible",
  "Direction becomes aligned",
  "Execution becomes consistent",
  "Momentum builds",
  "Outcomes compound",
];

function AchievementDiagramCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-xl ">
      <div className="md:w-[70%] flex flex-col justify-between rounded-md  border border-[#DEEDFF] bg-white p-md md:p-lg shadow-mobile-medium md:shadow-web-medium">
        <h1 className="flex flex-col items-start  text-center text-h2 font-extrabold text-[#0668E1] leading-none gap-xs">
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">E</span>veryone{" "}
          </span>
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">A</span>chieves{" "}
          </span>
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">S</span>eamless
          </span>
          <span>
            {" "}
            <span className="font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">Y</span>
            <span className="inline-flex gap-xs">
              ield
              <img
                src={"/icons/tm-badge.svg"}
                alt="tm-badge"
                className="size-[14px] inline"
              />
            </span>
          </span>
        </h1>
        <div className="mt-lg flex flex-col sm:flex-row gap-sm md:justify-between w-full font-medium text-base md:px-[1%]">
          <span className="flex items-center gap-xs">
            <img
              src="/icons/candidate-round-icon.svg"
              alt="candidate-icon"
              className="size-iconsize-sm scale-105"
            />
            Candidate
          </span>
          <span className="flex items-center gap-xs">
            <img
              src="/icons/recruiters-round-icon.svg"
              alt="recruiter-icon"
              className="size-iconsize-sm scale-105"
            />
            Recruiter
          </span>
          <span className="flex items-center gap-xs">
            <img
              src="/icons/employer-round-icon.svg"
              alt="employer-icon"
              className="size-iconsize-sm scale-105"
            />
            Employer
          </span>
        </div>
      </div>
      <div className="w-full h-full md:w-[30%]  rounded-md  border border-[#DEEDFF] bg-white p-md md:p-lg shadow-mobile-medium md:shadow-web-medium">
        <img
          src="/home/aspire-align-achieve-hiring-alignment-across-candidate-recruiter-employer.svg"
          alt=""
          className="w-auto h-full "
        />
      </div>
    </div>
  );
}




export default function AspirationToAchievementSection() {
  return (
    <>
      <div className="py-[5%]">
        <h2 className="text-h2 font-extrabold text-center ">Aspiration to Achievement</h2>
        <p className="text-base font-bold mt-xs text-center">
          When alignment becomes a system, aspiration converts into
          achievement.{" "}
        </p>

        {/* <div className="mt-lg grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-md">
          <AAAFrameworkCard />
          <AAAAppliedCard />
        </div> */}
        <div className="mt-xl ">
          <AchievementDiagramCard />
        </div>

        {/* <ResultCard /> */}
      </div>
    </>
  );
}
