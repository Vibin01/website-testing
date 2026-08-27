import { HeroSection } from "./HeroSection";
import AlignmentEngine from "./AlignmentEngine";
import AlignmentActors from "./AlignmentActors";
import AspirationAchievement from "./AspirationAchievement";
import HiringAlignmentCTA from "./HiringAlignmentCTA";
import HiringContinuity from "./HiringContinuity";
import ActorCards from "./ActrosCard";
import AlignmentSection from "./AlignmentSection";
export const HomePage = () => {
  return (
    <>
 <main className="bg-white">

  {/* =====================================================
      HERO + ACTOR CARDS
  ====================================================== */}
  <div className="relative">

    {/* Background */}
    <div
      className="
        absolute
        inset-x-0
        top-[80%]
        bottom-0
        bg-[#F2F8FF]
        rounded-t-[30%]
      "
    />

    {/* Content */}
    <div className="relative px-[5%]">
      <HeroSection />

      <ActorCards />
    </div>

  </div>


  {/* =====================================================
      REST
  ====================================================== */}

  <div className="px-[5%] pt-[5%] md:pt-0 bg-[#F2F8FF]">
    <div className="mt-[5%]- md:mt-0 py-[5%]">
      <HiringContinuity />
    </div>

    <div className="mt-[5%] pb-[5%] md:mt-0">
      <AlignmentSection />
    </div>
  </div>

  <div className=" bg-[#0668E1]">
    <AlignmentEngine />
  </div>

  <div className="px-[5%]">
    <div className="mt-[5%] md:mt-0 py-[5%]">
      <AlignmentActors />
    </div>
  </div>

  <div className="px-[4%] md:px-[5%] bg-[#F2F8FF]">
    <div className="mt-[5%] md:mt-0">
      <AspirationAchievement />
    </div>

    <div className="mt-[5%] md:mt-0 py-[5%]">
      <HiringAlignmentCTA />
    </div>
  </div>

</main>
    </>
  );
};
