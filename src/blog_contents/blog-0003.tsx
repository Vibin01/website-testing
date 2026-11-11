import React from "react";
import { GradientButton } from "@/components/common/Button/GradientButton";
import Image from "next/image";

export const metadata = {
  id: "blog-0003",
  pathName: "behavior-continuity-and-hiring-alignment",
  title: "The Architecture of Habit",
  heading_highlight: "Why Successful Behaviors Quietly Stop Producing Desired Outcomes: ",
  heading: "You have probably experienced this before.",
  img_url: "/resources/blogs/the-architecture-of-habit.svg",
  category: "ALIGNMENT ARCHITECTURE",
  metaTitle: "Behavior Continuity and Hiring Alignment | Connect EC",
  metaDescription:
    "Behavior continuity preserves movement, but alignment preserves relevance. Learn why successful hiring habits drift over time and how to realign them with changing conditions using Connect EC.",
};

export default function Blog0003() {
  return (
    <div className="space-y-sm text-xl font-medium mt-xl">
      {/* SECTION 1: Why Successful Behaviors Quietly Stop Producing Desired Outcomes */}
      <h3 className="text-h5 font-bold pb-sm">
        Why Successful Behaviors Quietly Stop Producing Desired Outcomes
      </h3>

      <p className="text-xl font-medium">
        You can keep doing what has always worked — and still find that it no longer gets you the outcome you want.
      </p>

      <p className="text-xl font-medium">Think about the route you take to work.</p>

      <p className="text-xl font-medium">
        The first few times, you pay attention to every turn. You check the traffic, compare different roads, and discover which route gets you there on time.
      </p>

      <p className="text-xl font-medium">After a while, you stop checking.</p>

      <p className="text-xl font-medium">
        You know the way. You have taken it dozens of times, and it has worked.
      </p>

      <p className="text-xl font-medium">Then something changes.</p>

      <p className="text-xl font-medium">
        Traffic becomes heavier. Roadworks begin. Your office hours shift.
      </p>

      <p className="text-xl font-medium">
        You keep taking the same route because it has always been reliable.
      </p>

      <p className="text-xl font-medium">But the journey starts taking longer.</p>

      {/* Result Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-lg">
        {/* The Original Result */}
        <div className="flex flex-col justify-center bg-[#F2F8FF] border border-[#B2D0F6] rounded-md p-md">
          <div className="flex items-start gap-sm">
            <Image src="/icons/tick-gradient-icon.svg" 
            alt="Tick-icon"
            height={40}
            width={40}
            className="size-iconsize-sm"
            />
            <div>
            <h4 className="text-lg font-medium tracking-wider text-[#0668E1] uppercase">
              THE ORIGINAL RESULT
            </h4>
            <div className="mt-xs">
            <h4 className="text-base font-bold text-[#0668E1]">
              Gets you there on time.
            </h4>
            </div>
          </div>
          </div>
          
        </div>

        {/* The Current Result */}
        <div className="flex flex-col justify-center bg-white border border-[#B2D0F6] rounded-md p-md">
          <div className="flex items-start gap-sm">
             <Image src="/icons/clock-icon.svg" 
            alt="clock-icon"
            height={40}
            width={40}
            className="size-iconsize-xs"
            />
            <div>
            <h4 className="text-lg font-medium tracking-wider  uppercase">
              THE CURRENT RESULT
            </h4>
            <div className="mt-sm">
            <h4 className="text-base font-bold ">
              Gets you there late.
            </h4>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <p className="text-xl font-medium">
        And unless you notice what has changed, you may keep following yesterday’s route while wondering why you are no longer arriving on time.
      </p>

      <p className="text-xl font-medium">The same thing happens in hiring.</p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 2: The Same Pattern Appears Across Hiring */}
      <h3 className="text-h5 font-bold pb-sm">
        The Same Pattern Appears Across Hiring
      </h3>

      <p className="text-xl font-medium">Experience helps us discover what works.</p>

      <p className="text-xl font-medium">
        Once an approach produces good results, we naturally begin to trust it. Repeating those approaches can save time and make decisions easier.
      </p>

      <p className="text-xl font-medium">
        A candidate learns how to evaluate job opportunities. A recruiter develops a reliable way to attract talent. An employer establishes an interview process that helps fill important roles.
      </p>

      <p className="text-xl font-medium">But what happens when the conditions around them change?</p>

      <div className="ml-[2%]">
        {/* Candidate Example */}
        <h4 className="text-h5 font-bold mt-xl mb-md">
          Candidate — When Career Priorities Change
        </h4>

        <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
          <p className="italic text-xl font-medium">You know what has worked for your career.</p>
          <p className="italic text-xl font-medium">
            In the past, choosing opportunities based on a better title and higher salary helped you progress.
          </p>
          <p className="italic text-xl font-medium">
            So when a new offer arrives, you evaluate it in the same way.
          </p>
          <p className="italic text-xl font-medium">
            But your priorities have changed. Career growth, flexibility, and the kind of work you want to do now matter more than they did before.
          </p>

          {/* Candidate Result Card with Chevron Ribbon */}
          <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
            <div>
              <span className="text-lg font-medium tracking-wider uppercase block ">
                OLD CRITERIA
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Better title and higher salary.
              </p>
            </div>

            <div className="py-xs">
              <div
                className="inline-block bg-[#0668E1] text-white text-lg font-medium px-xl py-xs"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
                }}
              >
                Priorities change
              </div>
            </div>

            <div>
              <span className="text-lg font-medium tracking-wider uppercase block">
                NEW PRIORITIES
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Career growth, flexibility, and meaningful work.
              </p>
            </div>
          </div>

          <p className="italic text-xl font-medium mt-md">
            The opportunity looks right by your old criteria — but may no longer be right for what you want next.
          </p>
        </div>

        {/* Recruiter Example */}
        <h4 className="text-h5 font-bold mt-xl mb-md">
          Recruiter — When Candidate Expectations Change
        </h4>

        <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
          <p className="italic text-xl font-medium">
            You have a sourcing approach that consistently attracts candidates.
          </p>
          <p className="italic text-xl font-medium">
            You know which channels to use, what messages to send, and how to follow up.
          </p>
          <p className="italic text-xl font-medium">
            The approach has helped you fill roles before, so you continue using it.
          </p>
          <p className="italic text-xl font-medium">
            But candidate expectations and the talent market change.
          </p>

          {/* Recruiter Result Card with Chevron Ribbon */}
          <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
            <div>
              <span className="text-lg font-medium tracking-wider uppercase block ">
                PREVIOUS OUTCOME
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Consistently attracted strong talent.
              </p>
            </div>

            <div className="py-xs">
              <div
                className="inline-block bg-[#0668E1] text-white text-lg font-medium px-lg py-xs"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
                }}
              >
                Market conditions change
              </div>
            </div>

            <div>
              <span className="text-lg font-medium tracking-wider uppercase block ">
                CURRENT REALITY
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Fewer responses. Harder to move conversations forward.
              </p>
            </div>
          </div>

          <p className="italic text-xl font-medium mt-md">
            The sourcing activity continues — but the results are no longer the same.
          </p>
        </div>

        {/* Employer Example */}
        <h4 className="text-h5 font-bold mt-xl mb-md">
          Employer — When Role Requirements Evolve
        </h4>

        <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
          <p className="italic text-xl font-medium">
            You have an interview process that has helped you make successful hires.
          </p>
          <p className="italic text-xl font-medium">
            The evaluation criteria are familiar, and the hiring team knows how to use them.
          </p>
          <p className="italic text-xl font-medium">
            But the role evolves. New responsibilities and capabilities become important.
          </p>
          <p className="italic text-xl font-medium">
            The team continues evaluating candidates using the same criteria without checking whether they still reflect the role.
          </p>

          {/* Employer Result Card with Chevron Ribbon */}
          <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
            <div>
              <span className="text-lg font-medium tracking-wider uppercase block ">
                PAST SUCCESS
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Process reliably filled key vacancies.
              </p>
            </div>

            <div className="py-xs">
              <div
                className="inline-block bg-[#0668E1] text-white text-lg font-medium px-lg py-xs"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
                }}
              >
                Role requirements evolve
              </div>
            </div>

            <div>
              <span className="text-lg font-medium tracking-wider uppercase block ">
                PRESENT CHALLENGE
              </span>
              <p className="text-base font-bold italic mt-1 ">
                Team struggles to identify who fits the evolving role.
              </p>
            </div>
          </div>

          <p className="italic text-xl font-medium mt-md">
            Interviews are completed, and candidates are assessed against familiar expectations — but the outcome falls short.
          </p>
        </div>
      </div>

      {/* The Underlying Pattern Card */}
      <div className="rounded-md border border-[#B2D0F6] bg-white p-lg my-lg shadow-[0px_4px_35px_4px_#0668E11A] space-y-xs">
        <h4 className="text-h5 font-bold">The underlying pattern</h4>
        <p className="text-xl font-medium">
          Sometimes the situation changes. Sometimes what we want from it changes.
        </p>
        <p className="text-xl font-medium">
          Either way, an approach that served us well before may no longer serve what we need today.
        </p>
      </div>

      <p className="mt-xl font-medium">
        If the approach worked before, what has changed between then and now?
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 3: Success Makes Repetition Easier */}
      <h3 className="text-h5 font-bold pb-sm">
        Success Makes Repetition Easier
      </h3>

      <p className="text-xl font-medium">When we first try something, we pay close attention.</p>

      <p className="text-xl font-medium">
        We ask questions. We compare alternatives. We look at the results to understand what worked and what didn’t.
      </p>

      <p className="text-xl font-medium">
        When an approach succeeds, we have a reason to use it again.
      </p>

      <p className="text-xl font-medium">
        And when it succeeds repeatedly, we become more confident in it.
      </p>

      <p className="text-xl font-medium">That is a useful part of learning.</p>

      <p className="text-xl font-medium">
        A recruiter should not have to rediscover how to source candidates for every new role. An employer should not have to rebuild its entire interview process for every vacancy. A candidate can use lessons from previous career decisions when considering a new opportunity.
      </p>

      <p className="text-xl font-medium">
        Experience allows us to carry what we have learned into the next situation.
      </p>

      <p className="text-xl font-medium">
        But previous success can also make an approach feel so familiar that we stop asking whether it still fits.
      </p>

      {/* Dual Callout Blocks */}
      <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-[#0668E1] p-md rounded-r-md my-sm space-y-xs">
        <span className="text-lg font-medium tracking-wider uppercase block ">
          WE BEGIN WITH
        </span>
        <p className="text-base font-bold italic ">
          “This worked before. Does it work here?”
        </p>
      </div>

      <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-[#0668E1] p-md rounded-r-md my-sm space-y-xs">
        <span className="text-lg font-medium tracking-wider uppercase block ">
          OVER TIME, THAT CAN BECOME
        </span>
        <p className="text-base font-bold italic ">
          “This worked before. Let’s do it again.”
        </p>
      </div>

      <p className="text-xl font-medium mt-md">
        The approach remains familiar. What may have changed is the situation in which we are using it.
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 4: What Changes When the Approach Stays the Same? */}
      <h3 className="text-h5 font-bold pb-sm">
        What Changes When the Approach Stays the Same?
      </h3>

      <p className="text-xl font-medium">
        Consider the recruiter whose sourcing strategy has consistently produced strong candidate responses.
      </p>

      <p className="text-xl font-medium">
        The recruiter continues using the same channels, messages, and follow-up approach.
      </p>

      <p className="text-xl font-medium">But response rates begin to decline.</p>

      <p className="text-xl font-medium">
        The first instinct might be to increase the activity: contact more candidates, send more messages, and repeat the follow-ups that previously worked.
      </p>

      <p className="text-xl font-medium">That may help in some situations.</p>

      <p className="text-xl font-medium">
        But what if the difficulty isn't the amount of sourcing activity?
      </p>

      {/* Intuitive Reaction / What May Be Needed Cards */}
      <div className="space-y-md my-xl">
        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md">
          <span className="inline-block px-sm py-xs rounded-full border border-[#0668E1]  text-md font-medium uppercase tracking-wider bg-white">
            Intuitive reaction
          </span>
          <h4 className="mt-sm text-base font-bold">
            Increase activity
          </h4>
          <p className="mt-1 text-xl font-medium">
            More messages. More follow-ups.
          </p>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md">
          <span className="inline-block px-sm py-xs rounded-full border border-[#0668E1]  text-md font-medium uppercase tracking-wider bg-white">
            What may be needed
          </span>
          <h4 className="mt-sm text-base font-bold">
            Adapt the strategy
          </h4>
          <p className="mt-1 text-xl font-medium">
            Address changed candidate expectations and the current talent pool.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">
        Repeating a familiar action does not necessarily address a changed situation.
      </p>

      <p className="text-xl font-medium">
        The same applies to the candidate who continues judging offers by criteria that no longer reflect their career priorities, or the employer whose evaluation process has not kept pace with a changing role.
      </p>

      <p className="text-xl font-medium">
        The actions are still happening. The people involved may still be experienced and committed.
      </p>

      <p className="text-xl font-medium">
        But the connection between the established approach and the current situation may have weakened.
      </p>

      <p className="text-xl font-medium">
        A declining outcome does not automatically prove that the approach is wrong. It is, however, a reason to look again at what the situation now requires.
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 5: When Continuity Needs to Adapt */}
      <h3 className="text-h5 font-bold pb-sm">
        When Continuity Needs to Adapt
      </h3>

      <p className="text-xl font-medium">
        Continuity helps us carry progress from one step to the next.
      </p>

      <p className="text-xl font-medium">
        It means that what we have learned, decided, and achieved does not need to be rebuilt every time we act.
      </p>

      <p className="text-xl font-medium">But there is an important distinction.</p>

      {/* Dual Highlight Blocks */}
      <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-[#0668E1] p-md rounded-r-md my-sm space-y-xs">
        <span className="text-lg font-medium tracking-wider uppercase block ">
          MISAPPLIED CONTINUITY
        </span>
        <p className="text-base font-bold italic ">
          Repeating yesterday’s actions regardless of today’s conditions.
        </p>
      </div>

      <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-[#0668E1] p-md rounded-r-md my-sm space-y-xs">
        <span className="text-lg font-medium tracking-wider uppercase block ">
          TRUE CONTINUITY
        </span>
        <p className="text-base font-bold italic ">
          Carrying progress and experience forward into today’s situation.
        </p>
      </div>

      <p className="text-xl font-medium mt-md">
        A familiar approach may still be useful. It may need a small adjustment, a different application, or a more substantial reconsideration.
      </p>

      <p className="text-xl font-medium">
        The important question is whether the approach remains connected to the conditions in which it is now being used.
      </p>


      {/* SECTION 6: When a Familiar Approach Meets a Changing Situation */}
      <h3 className="text-h5 font-bold pb-sm mt-xl">
        When a Familiar Approach Meets a Changing Situation
      </h3>

      {/* 3 Step Status Card */}
      <div className="rounded-lg border border-[#B2D0F6] bg-[#F2F8FF] p-md space-y-md my-md">
        <div className="flex items-start gap-sm">
          <Image src="/resources/blogs/icons/clock-blue-icon.svg" alt="clock icon" width={48} height={48} className="size-iconsize-md shrink-0" />
          <div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              WHAT WORKED BEFORE
            </h5>
            <p className="text-xl font-medium mt-1">
              You have an approach supported by previous experience.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-sm">
                    <Image src="/resources/blogs/icons/changed-icon.svg" alt="clock icon" width={48} height={48} className="size-iconsize-md shrink-0" />

          <div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              WHAT HAS CHANGED
            </h5>
            <p className="text-xl font-medium mt-1">
              New priorities, expectations, or conditions affect the outcome.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-sm">
                              <Image src="/resources/blogs/icons/next-icon.svg" alt="clock icon" width={48} height={48} className="size-iconsize-md shrink-0" />

          <div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              WHAT HAPPENS NEXT
            </h5>
            <p className="text-xl font-medium mt-1">
              You evaluate whether to continue, adjust, or change the approach.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xl font-medium">
        Continuity carries experience forward. The next decision also needs to reflect the current situation.
      </p>

      <p className="text-xl font-medium">
        The goal is not to abandon a successful approach whenever conditions change. It is to avoid repeating it simply because it succeeded before.
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 7: Where Alignment Matters */}
      <h3 className="text-h5 font-extrabold pb-sm">
        Where Alignment Matters
      </h3>

      <p className="text-xl font-medium">
        If Continuity carries what we have learned into the next situation, what helps us recognise whether that learning still applies?
      </p>

      <p className="text-xl font-bold">Alignment.</p>

      <p className="text-xl font-medium">
        Alignment keeps what we understand, intend, decide, and do sufficiently connected as circumstances change.
      </p>

      <p className="text-xl font-medium">
        It helps us use experience without allowing previous success to replace our understanding of what the current situation requires.
      </p>

      <h4 className="text-h5 font-bold pt-md">
        How Alignment Preserves Continuity
      </h4>

      {/* 3 Column Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md py-md">
        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            CANDIDATE
          </h5>
          <p className="text-xl font-medium leading-relaxed">
            Keeps career aspirations, opportunity expectations, and decisions connected as personal priorities and circumstances change.
          </p>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            RECRUITER
          </h5>
          <p className="font-medium leading-relaxed">
            Keeps sourcing and engagement approaches connected to current role requirements, candidate responses, and hiring priorities.
          </p>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            EMPLOYER
          </h5>
          <p className="text-xl font-medium leading-relaxed">
            Keeps evaluation criteria and hiring decisions connected to current business needs, role expectations, and available talent.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">
        Alignment does not mean that a proven approach must always change.
      </p>

      <p className="text-xl font-medium">
        Sometimes, reviewing the current situation confirms that the existing approach is still appropriate.
      </p>

      <p className="text-xl font-medium">
        At other times, new information reveals that an adjustment is needed.
      </p>

      <p className="text-xl font-medium">
        What matters is that the next decision reflects both what experience has taught us and what the present situation requires.
      </p>

      <p className="text-xl font-medium">
        That is how Alignment helps preserve Continuity without allowing it to become repetition for its own sake.
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 8: The Connect EC Perspective */}
      <h3 className="text-h5 font-extrabold pb-sm">
        The <span className="text-[#0668E1]">Connect EC</span> Perspective
      </h3>

      <p className="text-xl font-medium">
        When a familiar approach stops producing the expected outcome, the first instinct may be to try harder.
      </p>

      <p className="text-xl font-medium">
        A candidate applies the same criteria more carefully.
      </p>

      <p className="text-xl font-medium">
        A recruiter increases sourcing activity.
      </p>

      <p className="text-xl font-medium">
        An employer conducts additional interviews using the same evaluation process.
      </p>

      <p className="text-xl font-medium">
        But before repeating the approach, there may be a more useful question:
      </p>

      {/* Question Card */}
      <div className="rounded-md border border-[#B2D0F6] bg-[#F2F8FF] p-md my-md">
        <span className="inline-block px-md md:px-sm py-xs rounded-full bg-white border border-[#B2D0F6] text-[#0668E1] text-lg font-medium uppercase tracking-wider">
          THE QUESTION THAT CHANGES THE CONVERSATION
        </span>
        <h4 className="text-h5 font-bold mt-sm">
          What has changed since this approach last produced the outcome we wanted?
        </h4>
      </div>

      <p className="text-xl font-medium">
        The answer may be different for each actor.
      </p>

      {/* Left Blue Line Actor Blocks */}
      <div className="border-l-2 rounded-r-md border-[#0668E1] pl-md space-y-md my-lg">
        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For a candidate
          </h5>
          <p className="mt-1 text-xl font-medium">
            Career priorities, personal circumstances, or expectations of the next role.
          </p>
        </div>

        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For a recruiter
          </h5>
          <p className="mt-1 text-xl font-medium">
            Candidate expectations, role requirements, talent availability, or responses to the current sourcing approach.
          </p>
        </div>

        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For an employer
          </h5>
          <p className="mt-1 text-xl font-medium">
            Business priorities, role responsibilities, evaluation requirements, or hiring conditions.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">
        The purpose is not to distrust experience or assume that a declining outcome always requires a new approach.
      </p>

      <p className="text-xl font-medium">
        It is to recognise that an approach can remain familiar even when the situation it was designed for has changed.
      </p>

      <p className="text-xl font-medium">
        Once that distinction becomes clear, we can look beyond repeating what worked before and consider what will support the next decision.
      </p>

      <p className="text-xl font-medium">
        Experience should carry progress forward — not keep us tied to conditions that no longer apply.
      </p>

      <div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* FINAL SUMMARY TRIAD CARD */}
      <div className="rounded-md border border-[#0668E1] bg-[#F2F8FF] p-md my-lg">
        <div className="flex flex-col md:flex-row justify-around items-center gap-md text-center">
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Experience</h5>
            <p className="text-xl font-medium">Shows us what worked.</p>
          </div>
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Continuity</h5>
            <p className="text-xl font-medium">Carries that learning forward.</p>
          </div>
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Alignment</h5>
            <p className="text-xl font-medium">Keeps it connected to what matters now.</p>
          </div>
        </div>
      </div>

      <h4 className="text-h5 font-bold text-center my-md">
        Don’t abandon what worked. Make sure it still works for what you need today.
      </h4>

      {/* FINAL BRAND CTA */}
      <div className="flex flex-col items-center justify-center text-center space-y-sm mt-xl pt-4">
        <h3 className="text-h5 font-extrabold text-[#0668E1]">
          Experience Hiring Alignment.
        </h3>
        <p className="text-base font-bold text-[#0668E1]">
          Connect EC® | The Hiring Alignment System™
        </p>
        <p className="italic text-xl font-medium">
          Alignment Preserves Continuity
        </p>
        <div className="pt-md flex justify-center">
          <GradientButton
            text="Unlock Connect EC for Free"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
