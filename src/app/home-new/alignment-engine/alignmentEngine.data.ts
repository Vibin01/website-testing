export const alignmentMechanisms = [
  {
    number: "01",
    label: "ALIGNMENT TRIGGER",
    title: "Makes the Decision Point Visible",
    description:
      "Surfaces the required decision so an actor can continue, redirect, pause or close the hiring flow on time.",
    level: "Decision Point",
    signal: "Intent → Decision",
  },
  {
    number: "02",
    label: "ALIGNMENT SIGNAL",
    title: "Makes Follow-Through Visible",
    description:
      "Shows whether an actor responds on time and whether the action that follows remains coherent with the decision communicated.",
    level: "Actor",
    signal: "Behaviour → Feedback",
  },
  {
    number: "03",
    label: "ALIGNMENT SPECTRUM",
    title: "Makes the Wider Pattern Visible",
    description:
      "Brings candidate and recruiter signals together to make alignment patterns visible across the hiring ecosystem.",
    level: "Ecosystem",
    signal: "Pattern → Alignment",
  },
];