export default function Metrics() {
  const metrics = [
    ["Treasury Value", "$1B"],
    ["Underlying Assets", "$1.2B"],
    ["Token Supply", "1B SBU"],
    ["Blockchain", "Ethereum"],
  ];

  return (
    <section className="grid gap-6 md:grid-cols-4">
      {metrics.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:border-emerald-500/40"
        >
          <div className="text-sm text-slate-400">
            {label}
          </div>

          <div className="mt-3 text-2xl font-bold">
            {value}
          </div>
        </div>
      ))}
    </section>
  );
}
