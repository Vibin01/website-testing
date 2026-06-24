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
      <div className="md:w-[70%] flex flex-col justify-between rounded-md  border border-[#DEEDFF] bg-white p-md md:p-lg shadow-[0px_4px_40px_5px_#0668E11A]">
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
      <div className="w-full h-full md:w-[30%]  rounded-md  border border-[#DEEDFF] bg-white p-md md:p-lg shadow-[0px_4px_40px_5px_#0668E11A]">
        <img
          src="/home/aspire-align-achieve-hiring-alignment-across-candidate-recruiter-employer.svg"
          alt=""
          className="w-auto h-full "
        />
      </div>
    </div>
  );
}
function AAAAppliedCard() {
  return (
    <div className="rounded-md border border-[#D3E6FF] bg-white p-md md:p-lg shadow-[0px_4px_40px_5px_#0668E11A]">
      <h3 className="text-base font-bold">When AAA Is Applied</h3>

      <div className="mt-sm space-y-xs">
        {flowSteps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center gap-xs">
              <img
                src="/icons/tick-gradient-icon.svg"
                alt=""
                className="size-iconsize-sm  p-[0.2%]"
              />

              <p className="text-xl font-medium">{step}</p>
            </div>

            {index !== flowSteps.length - 1 && (
              <FaArrowDown className="ml-0.2 mt-xs text-[#0668E1] size-iconsize-sm p-[0.6%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AAAFrameworkCard() {
  return (
    <div className="rounded-md border border-[#D3E6FF] bg-white p-md md:p-lg shadow-[0px_4px_40px_5px_#0668E11A]">
      <h3 className="text-base font-bold">The AAA Framework synchronizes:</h3>

      <div className="mt-lg space-y-sm">
        {[
          ["What candidates", "Experience"],
          ["What employers", "Require"],
          ["How recruiters", "Operate"],
        ].map(([line1, line2], index) => (
          <div key={index}>
            <div className="flex gap-sm">
              <img
                src="/icons/question-round-icon.svg"
                alt=""
                className="size-iconsize-sm mt-[0.5%]"
              />

              <div>
                <p className="text-xl font-medium">{line1}</p>
                <p className="font-base font-bold">{line2}</p>
              </div>
            </div>

            {index !== 2 && (
              <div className="ml-0.2 ">
                <FaArrowDown className="text-[#0668E1] size-iconsize-sm p-[0.6%]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultCard() {
  return (
    <div className="mt-xl rounded-lg border border-[#D3E6FF] bg-[#FFFFFF33] p-md shadow-[0px_4px_40px_5px_#0668E11A]">
      <h2 className="text-h2 font-extrabold">The Result</h2>

      <p className="mt-sm text-base font-medium">
        <span className="font-bold">Situation, Direction, and Execution</span>{" "}
        are aligned.
      </p>

      <p className="mt-xs text-base font-medium">The outcome is reliable.</p>

      <p className="mt-lg text-base font-medium">This state is called:</p>

      <div className="mt-sm flex flex-col gap-md rounded-md bg-[#EEF6FF] p-md lg:flex-row lg:items-center lg:justify-between">
        <h3 className="text-h5 font-bold">
          <span className="text-[#1B1C17]">EASY:</span>{" "}
          <span className="text-[#0668E1]">
            Everyone Achieves Seamless Yield
          </span>
        </h3>
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

        <ResultCard />
      </div>
    </>
  );
}
