export default function EngineDivider() {
  return (
    <div className="mt-24 border-t border-white/10 pt-10 b">

      <div className="grid gap-10 md:grid-cols-3">

        {/* Mechanisms */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Three Mechanisms
          </p>

          <p className="mt-3 text-lg font-medium text-white">
            Trigger · Signal · Spectrum
          </p>
        </div>

        {/* Levels */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Three Levels
          </p>

          <p className="mt-3 text-lg font-medium text-white">
            Decision Point · Actor · Ecosystem
          </p>
        </div>

        {/* Purpose */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            One Purpose
          </p>

          <p className="mt-3 text-lg font-medium text-[#0668E1]">
            Timely Intervention
          </p>
        </div>

      </div>

    </div>
  );
}