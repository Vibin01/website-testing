import FlowCards from "../home/FlowCards";
import Section5Actors from "./alignment-actors/AlignmentActors";
import Section2Challenge from "./alignment-challenge/AlignmentChallenge";
import Section4Engine from "./alignment-engine/AlignmentEngine";
import Section3Intelligence from "./alignment-intelligence/AlignmentIntelligence";
import Section1Alignment from "./alignment/AlignmentSection";
import Section6Achievement from "./aspiration-achievement/AspirationAchievement";
import StackedSections from "./stacked/StackedSections";

export default function HomePage() {
  return (
    <main className="w-full ">

      {/* Section 1 — Normal */}
      <Section1Alignment />
      <div className="py-xl overflow-x-hidden">
      <FlowCards/>
      </div>

      {/* Sections 2 → 5 — Stacked */}
      <StackedSections>
        <Section2Challenge />
        <Section3Intelligence />
        <Section4Engine />
        <Section5Actors />
      </StackedSections>

      {/* Section 6 — Normal */}
      <Section6Achievement />

    </main>
  );
}