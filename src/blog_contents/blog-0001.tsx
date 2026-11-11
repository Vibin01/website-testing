import React from "react";
import { GradientButton } from "@/components/common/Button/GradientButton";
import Image from "next/image";

export const metadata = {
  id: "blog-0001",
  pathName: "reminders-awareness-and-aligned-action",
  title: "The Architecture of Reminders",
  heading_highlight: "Why More Reminders Rarely Create More Behavior:",
  heading: "You have probably experienced this before.",
  img_url: "/resources/blogs/blog-1.svg",
  category: "ALIGNMENT ARCHITECTURE",
  metaTitle: "Reminders, Awareness, and Aligned Action | Connect EC",
  metaDescription:
    "Behavior continuity preserves movement, but alignment preserves relevance. Learn why successful hiring habits drift over time and how to realign them with changing conditions using Connect EC.",
};

export default function Blog0001() {
  return (
    <div className="space-y-sm text-xl font-medium mt-xl">
      {/* SECTION 1: Why More Reminders Rarely Create More Behavior */}
      <h3 className="text-h5 font-bold pb-sm">
        Why More Reminders Rarely Create More Behavior
      </h3>

      <p className="text-xl font-medium">You can remember exactly what you intended to do—and still leave it undone.</p>

      <p className="text-xl font-medium">You decide that tomorrow will be different.</p>

      <p className="text-xl font-medium">
        Before going to bed, you set an alarm for six o’clock. You plan to wake up early, put on your shoes, and go for a walk before the day begins.
      </p>

      <p className="text-xl font-medium">The next morning, the alarm rings exactly on time.</p>

      <p className="text-xl font-medium">
        You wake up, reach for your phone, and press snooze. Nine minutes later, it rings again. You press snooze again.
      </p>

      <p className="text-xl font-medium">Eventually, you get out of bed.</p>

      <p className="text-xl font-medium">But the morning walk never happens.</p>

      <p className="text-xl font-medium">
        That evening, you still want to become healthier. You haven’t forgotten why you set the alarm.
      </p>

      <p className="text-xl font-medium">So you decide to set two alarms instead of one. Then three.</p>

      <p className="text-xl font-medium">You try different sounds, intervals, and apps.</p>

      <p className="text-xl font-medium">The reminders increase.</p>

      <p className="text-xl font-medium">But the behaviour doesn’t change.</p>

      <p className="text-xl font-medium">And that raises a difficult question:</p>

      {/* Callout Question Card 1 */}
      <div className="p-lg rounded-md border border-[#B2D0F6] shadow-[0px_4px_35px_4px_#0668E11A]">
        <h3 className="text-h5 font-bold">
          If the reminder worked, why didn’t the action follow?
        </h3>
      </div>

<div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 2: The Same Pattern Appears in Hiring */}
      <h3 className="text-h5 font-bold pb-sm">
        The Same Pattern Appears in Hiring
      </h3>

      <p className="text-xl font-medium">
        Reminders are part of almost every hiring process. They help candidates keep track of interview invitations, recruiters remember pending feedback, and employers stay aware of hiring decisions.
      </p>

      <p className="text-xl font-medium">
        But receiving a reminder and taking the next action are not the same thing.
      </p>
<div className="ml-[2%]">
      {/* Candidate Example */}
      <h4 className="text-h5 font-bold  mt-xl mb-md">
        Candidate — When an Interview Remains Unconfirmed
      </h4>

      <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
        <p className="italic text-xl font-medium">You want to attend an interview.</p>
        <p className="italic text-xl font-medium">
          The recruiter proposes a time and sends an invitation. You intend to confirm the schedule.
        </p>
        <p className="italic text-xl font-medium">
          You see the reminder and remember that a response is needed.
        </p>
        <p className="italic text-xl font-medium">Then another reminder arrives.</p>
        <p className="italic text-xl font-medium">You may still want the opportunity.</p>
        <p className="italic text-xl font-medium">But the interview remains unconfirmed.</p>

        {/* Candidate Result Card */}
        <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE REMINDER
            </span>
            <p className="text-base font-bold italic  mt-1">
              You know the interview needs a response.
            </p>
          </div>
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE OUTCOME
            </span>
            <p className="text-base font-bold italic  mt-1">
              The interview remains unconfirmed.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Recruiter & Employer Examples */}
      <h4 className="text-h5 font-bold  mt-xl mb-md">
        Recruiter — When Candidate Communication Remains Pending
      </h4>

      <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
        <p className="italic text-xl font-medium">You want to keep the candidate informed.</p>
        <p className="italic text-xl font-medium">
          The interview is complete, the panel has shared its feedback, and the candidate is waiting for an update.
        </p>
        <p className="italic text-xl font-medium">
          You see a reminder about the pending communication. You know the candidate is waiting.
        </p>
        <p className="italic text-xl font-medium">But the update still doesn’t go out.</p>

        {/* Recruiter Result Card */}
        <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE REMINDER
            </span>
            <p className="text-base font-bold italic  mt-1">
              You know the candidate is waiting for an update.
            </p>
          </div>
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE OUTCOME
            </span>
            <p className="text-base font-bold italic  mt-1">
              The communication remains pending.
            </p>
          </div>
        </div>
      </div>

      {/* Employer Example */}
      <h4 className="text-xl sm:text-2xl font-bold  mt-xl mb-md">
        Employer — When a Hiring Decision Remains on Hold
      </h4>

      <div className="ml-[2%] border-l border-[#B2D0F6] pl-5 sm:pl-8 space-y-4">
        <p className="italic text-xl font-medium">You want to complete an important hire.</p>
        <p className="italic text-xl font-medium">
          The final candidates have been evaluated, and the information needed to make the hiring decision is available.
        </p>
        <p className="italic text-xl font-medium">
          You receive a reminder about the pending decision. You see it and know that the next step is waiting for you.
        </p>
        <p className="italic text-xl font-medium">Another reminder follows.</p>
        <p className="italic text-xl font-medium">But the hiring decision remains on hold.</p>

        {/* Employer Result Card */}
        <div className="rounded-md bg-[#F2F8FF] p-lg space-y-sm not-italic mt-md">
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE REMINDER
            </span>
            <p className="text-base font-bold italic  mt-1">
              You know the hiring decision is pending.
            </p>
          </div>
          <div>
            <span className="text-lg font-medium tracking-wider  uppercase block">
              THE OUTCOME
            </span>
            <p className="text-base font-bold italic  mt-1">
              The hiring decision remains on hold.
            </p>
          </div>
        </div>
      </div>

      </div>

      <p className="mt-xl text-xl font-medium">Different situations. The same underlying question:</p>

      {/* Callout Question Card 2 */}
      <div className="mt-md p-lg rounded-md border border-[#B2D0F6] shadow-[0px_4px_35px_4px_#0668E11A]">
        <h3 className="text-h5 font-bold ">
          If the next action is already visible, why does it remain undone?
        </h3>
      </div>

<div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 4: A Reminder Can Work Without Producing Action */}
      <h3 className="text-h5 font-bold pb-sm">
        A Reminder Can Work Without Producing Action
      </h3>

      <p className="text-xl font-medium">The usual explanation is simple:</p>

      <p className="text-xl font-medium">“They probably forgot.”</p>

      <p className="text-xl font-medium">That is why reminders exist.</p>

      <p className="text-xl font-medium">
        When an interview remains unconfirmed, another reminder is sent. When feedback remains pending, another follow-up arrives. When a hiring decision is delayed, another notification is sent.
      </p>

      <p className="text-xl font-medium">
        The assumption seems reasonable: once someone remembers what needs to happen, the action should follow.
      </p>

      <p className="text-xl font-medium">But consider what happened in the examples above.</p>

      <p className="text-xl font-medium">
        The candidate saw the interview reminder. The recruiter saw the pending-feedback notification. The employer saw the reminder about the hiring decision.
      </p>

      <p className="text-xl font-medium">In each case, the reminder may have accomplished its immediate purpose.</p>

      <p className="text-xl font-medium">It restored awareness of what needed to happen next.</p>

      <p className="text-xl font-medium">Yet the action remained incomplete.</p>

      {/* Image 4 Dual Cards */}
      <div className="space-y-md my-xl">
        <div className=" bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md">
          <span className="inline-block px-sm py-xs rounded-full border border-[#0668E1] text-[#2C2C2C] text-md font-medium uppercase tracking-wider bg-white">
            THE REMINDER
          </span>
          <h4 className="mt-sm text-base font-bold ">
            Awareness restored.
          </h4>
          <p className="mt-1 text-xl font-medium ">
            The person knows what needs to happen next.
          </p>
        </div>

        <div className=" bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md">
          <span className="inline-block px-sm py-xs rounded-full border border-[#0668E1] text-[#2C2C2C] text-md font-medium uppercase tracking-wider bg-white">
            THE NEXT ACTION
          </span>
          <h4 className="mt-sm text-base font-bold ">
            Still incomplete.
          </h4>
          <p className="mt-1 text-xl font-medium">
            The intended action has not followed.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">A reminder can bring something back to our attention.</p>

      <p className="text-xl font-medium">
        But remembering what needs to happen does not, by itself, make it happen.
      </p>

      <p className="text-xl font-medium">Awareness is not action.</p>

<div className="w-full border border-[#DEEDFF] my-[7%]" />


      {/* SECTION 5: When Another Reminder Repeats the Same Problem */}
      <h3 className="text-h5 font-extrabold pb-sm">
        When Another Reminder Repeats the Same Problem
      </h3>

      <p className="text-xl font-medium">Consider the candidate who has already seen the interview invitation.</p>

      <p className="text-xl font-medium">
        The first reminder arrives. The candidate remembers that a response is needed, but the schedule remains unconfirmed.
      </p>

      <p className="text-xl font-medium">So a second reminder is sent.</p>

      <p className="text-xl font-medium">The assumption may be:</p>

      <p className="text-xl font-medium">“The candidate forgot again.”</p>

      <p className="text-xl font-medium">But what if the candidate never forgot?</p>

      <p className="text-xl font-medium">What if the first reminder had already restored awareness?</p>

      <p className="text-xl font-medium">Then the second reminder may simply recreate the same situation.</p>

      {/* Image 5 Dual Cards */}
      <div className="space-y-md my-xl">
        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-[#0668E1]  p-md space-y-xs">
          <h4 className="text-base font-bold tracking-wider  uppercase">
            FIRST REMINDER
          </h4>
          <p className="text-xl font-medium">Awareness is restored.</p>
          <div className="text-xl font-bold mt-md py-sm px-6 rounded-full border border-[#0668E1] bg-white text-center ">
            The next action doesn’t happen.
          </div>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1]  p-md space-y-xs">
          <h4 className="text-base font-bold tracking-wider  uppercase">
            SECOND REMINDER
          </h4>
          <p className="text-xl font-medium">Awareness is restored again.</p>
          <div className="text-xl font-bold mt-md py-sm px-6 rounded-full border border-[#0668E1] bg-white text-center ">
            But the action can remain pending.
          </div>
        </div>
      </div>

      <p className="text-xl font-medium">
        The same pattern can appear when a recruiter receives repeated feedback reminders or an employer receives another reminder about a pending decision.
      </p>

      <p className="text-xl font-medium">More reminders may make the unfinished action increasingly visible.</p>

      <p className="text-xl font-medium">But greater visibility does not necessarily move the hiring journey forward.</p>

      <p className="text-xl font-medium">
        Another reminder can help when someone has forgotten or missed the earlier notification.
      </p>

      <p className="text-xl font-medium">
        When awareness has already returned, however, the next step is to understand why the action remains pending.
      </p>

<div className="w-full border border-[#DEEDFF] my-[7%]" />


      {/* SECTION 6: The Missing Connection: Continuity */}
      <h3 className="text-h5 font-extrabold  pb-sm">
        The Missing Connection: Continuity
      </h3>

      <p className="text-xl font-medium">
        Imagine a candidate receiving an interview reminder and remembering exactly what needs to happen.
      </p>

      <p className="text-xl font-medium">The opportunity still matters. The need to respond is clear.</p>

      <p className="text-xl font-medium">But the interview remains unconfirmed.</p>

      <p className="text-xl font-medium">
        Somewhere between knowing that a response is needed and actually responding, the movement stopped.
      </p>

      <p className="text-xl font-medium">That is where Continuity matters.</p>

      <p className="text-xl font-medium">
        Continuity keeps one step connected to the next, allowing progress to carry forward as circumstances change.
      </p>

      <p className="text-xl font-medium">
        In this situation, the reminder may have restored awareness, but the candidate still needs to make a decision and carry it through to action.
      </p>

      <h4 className="text-h5 font-bold mt-xl mb-md">
        From Awareness to Action
      </h4>

      {/* From Awareness to Action Card */}
      <div className="rounded-lg border border-[#B2D0F6] bg-[#F2F8FF] p-md space-y-md my-md">
        <div className="flex items-start gap-sm">
           <Image
                src="/resources/blogs/icons/awareness-icon.svg"
                width={40}
                height={40}
                alt="Awareness"
                className="size-iconsize-md"
              />
          <div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              AWARENESS
            </h5>
            <p className="text-xl font-medium mt-1">
              You know the interview needs a response.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-sm">
          <Image
                src="/resources/blogs/icons/decision-icon.svg"
                width={40}
                height={40}
                alt="Decision"
                className="size-iconsize-md"
              />
          <div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              DECISION
            </h5>
            <p className="text-xl font-medium mt-1">
              You decide whether to accept, decline, or reschedule.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-sm">
          <Image
                src="/resources/blogs/icons/action-icon.svg"
                width={40}
                height={40}
                alt="Action"
                className="size-iconsize-md"
              /><div>
            <h5 className="text-xl font-bold uppercase tracking-wider text-[#0668E1]">
              ACTION
            </h5>
            <p className="text-xl font-medium mt-1">
              You communicate your decision to the recruiter.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xl font-medium">A continuity break occurs when the next step does not carry forward.</p>

      <p className="text-xl font-medium">
        The candidate may still intend to attend, but that intention has not carried through to confirmation.
      </p>

      <p className="text-xl font-medium">The reminder restored awareness. The next action did not follow.</p>

      <p className="text-xl font-medium">
        This is where Continuity can break: between knowing what needs to happen, deciding what to do, and carrying that decision into action.
      </p>

      <p className="text-xl font-medium">
        The visible outcome is an unconfirmed interview. The missing connection is the movement that should have carried awareness into a decision and response.
      </p>

<div className="w-full border border-[#DEEDFF] my-[7%]" />

      {/* SECTION 7: Where Alignment Matters */}
      <h3 className="text-h5 font-extrabold pb-sm">
        Where Alignment Matters
      </h3>

      <p className="text-xl font-medium">
        If reminders restore awareness, what helps carry that awareness into action?
      </p>

      <p className="text-xl font-bold ">Alignment.</p>

      <p className="text-xl font-medium">
        Alignment keeps what we understand, intend, decide, and do sufficiently connected to support the next action.
      </p>

      <p className="text-xl font-medium">A reminder can make a pending action visible again.</p>

      <p className="text-xl font-medium">
        Alignment helps keep awareness, the subsequent decision, and the next action connected as circumstances change.
      </p>

      <p className="text-xl font-medium">Across hiring, that connection takes different forms.</p>

      <h4 className="text-h5 font-bold pt-md">
        How Alignment Preserves Continuity
      </h4>

      {/* 3 Column Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md py-md">
        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            CANDIDATE
          </h5>
          <p className="text-xl font-medium  leading-relaxed">
            Keeps awareness of an interview, the decision to participate, and the response to the recruiter connected as availability and circumstances change.
          </p>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            RECRUITER
          </h5>
          <p className="text-xl font-medium  leading-relaxed">
            Keeps pending feedback, the intention to communicate, and the candidate update connected as hiring priorities and workload change.
          </p>
        </div>

        <div className="bg-[#F2F8FF] border-l-2 rounded-r-md border-l-[#0668E1] p-md space-y-md">
          <h5 className="text-base font-bold uppercase tracking-wider text-[#0668E1]">
            EMPLOYER
          </h5>
          <p className="text-xl font-medium  leading-relaxed">
            Keeps candidate evaluations, hiring priorities, and subsequent decisions connected as business conditions evolve.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">
        Alignment does not mean that every reminder must produce the action originally expected.
      </p>

      <p className="text-xl font-medium">
        A candidate may need to reschedule an interview. A recruiter may need additional information before communicating an outcome. An employer may need to reconsider a hiring decision.
      </p>

      <p className="text-xl font-medium">
        What matters is that awareness leads to an informed decision and an appropriate next action, rather than leaving the hiring journey indefinitely unresolved.
      </p>

      <p className="text-xl font-medium">That is how Alignment helps preserve Continuity.</p>

<div className="w-full border border-[#DEEDFF] my-[7%]" />


      {/* SECTION 8: The Connect EC Perspective */}
      <h3 className="text-h5 font-extrabold pb-sm">
        The <span className="text-[#0668E1]">Connect EC</span> Perspective
      </h3>

      <p className="text-xl font-medium">
        When an action remains pending, the first instinct is often to send another reminder.
      </p>

      <p className="text-xl font-medium">
        But before adding another notification, there may be a more useful question:
      </p>

      {/* Question Card  */}
      <div className="rounded-md border border-[#B2D0F6] bg-[#F2F8FF] p-md">
        <span className="inline-block px-md md:px-sm py-xs rounded-full bg-[#F2F8FF] border border-[#B2D0F6] text-[#0668E1] text-lg font-medium uppercase tracking-wider bg-white">
          THE QUESTION THAT CHANGES THE CONVERSATION
        </span>
        <h4 className="text-h5 font-bold  mt-sm">
          If the reminder restored awareness, what stopped that awareness from becoming action?
        </h4>
      </div>

      <p className="text-xl font-medium">The answer may be different for each actor.</p>

      

      {/* Left Blue Line Actor Blocks */}
      <div className="border-l-2 rounded-r-md border-[#0668E1] pl-md space-y-md my-lg">
        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For a candidate
          </h5>
          <p className="mt-1 text-xl font-medium">
            Changing availability, uncertainty about the opportunity, or a decision that has not yet been communicated.
          </p>
        </div>

        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For a recruiter
          </h5>
          <p className="text-xl font-medium mt-1">
            Competing priorities, pending clarification, or feedback that has not yet been shared.
          </p>
        </div>

        <div>
          <h5 className="text-base font-bold text-[#0668E1]">
            For an employer
          </h5>
          <p className="text-xl font-medium mt-1">
            Unresolved selection criteria, competing priorities, or a pending approval.
          </p>
        </div>
      </div>

      <p className="text-xl font-medium">
        The purpose is not to assume that every missed action has the same explanation.
      </p>

      <p className="text-xl font-medium">
        It is to recognise that restoring awareness and enabling action are two different challenges.
      </p>

      <p className="text-xl font-medium">
        Once that distinction becomes clear, attention can shift from sending another reminder to understanding what is preventing the next step.
      </p>

      <p className="text-xl font-medium">
        An interview reminder still needs to be followed by a candidate response.
      </p>

      <p className="text-xl font-medium">
        A feedback reminder still needs to be followed by the appropriate communication.
      </p>

      <p className="text-xl font-medium">
        A hiring-decision reminder still needs to be followed by an informed decision.
      </p>

      <p className="text-xl font-medium">
        Every stage needs to remain connected to what follows.
      </p>

<div className="w-full border border-[#DEEDFF] my-[7%]" />


      {/* FINAL ENDING SECTION (Ending Image) */}
      <div className="rounded-md border border-[#0668E1] bg-[#F2F8FF] p-md my-lg">
        <div className="flex flex-col md:flex-row justify-around items-center gap-md text-center">
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Reminders</h5>
            <p className="text-xl font-medium">Restore awareness.</p>
          </div>
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Alignment</h5>
            <p className="text-xl font-medium">Connects awareness, decision, and action.</p>
          </div>
          <div>
            <h5 className="text-base font-bold text-[#0668E1] mb-xs">Continuity</h5>
            <p className="text-xl font-medium">Carries progress from one step to the next.</p>
          </div>
        </div>
      </div>

      <h4 className="text-h5 font-bold  text-center my-md">
        Reminders restore awareness. Alignment carries awareness into action.
      </h4>

      <div className="flex flex-col items-center justify-center text-center space-y-sm mt-xl pt-4">
        <h3 className="text-h5 font-extrabold text-[#0668E1]">
          Experience Hiring Alignment.
        </h3>
        <p className="text-base font-bold text-[#0668E1]">
          Connect EC® | The Hiring Alignment System™
        </p>
        <p className="italic  text-xl font-medium">
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
