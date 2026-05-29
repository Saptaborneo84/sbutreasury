export default function InstitutionalStats() {
  const stats = [
    ["$1B", "Target Treasury Infrastructure"],
    ["10,000 TCD", "Integrated Sugar Processing"],
    ["30 MW", "Biomass Energy Capacity"],
    ["20,000 Ha", "Future Plasma Expansion"],
  ];

  return (
    <section className="mt-16">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center backdrop-blur"
          >
            <div className="text-4xl font-bold text-emerald-400">
              {value}
            </div>

            <div className="mt-3 text-sm text-slate-400">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
