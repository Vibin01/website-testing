const groups = [
  {
    eyebrow: "Three Actors",
    items: ["Candidate", "Recruiter", "Employer"],
  },
  {
    eyebrow: "Three Goals",
    items: ["Career Progress", "Hiring Delivery", "Hiring Targets"],
  },
  {
    eyebrow: "One Aspiration",
    items: ["Seamless Yield"],
  },
];

export default function AlignmentDivider() {
  return (
    <div className="mt-24 border-y border-slate-200 py-10">
      <div className="grid gap-10 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.eyebrow}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {group.eyebrow}
            </p>

            <div className="mt-4 space-y-2">
              {group.items.map((item) => (
                <p
                  key={item}
                  className="text-sm font-medium text-slate-900"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}