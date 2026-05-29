export default function ESG() {
  const items = [
    ["Renewable Energy", "Biomass cogeneration supports sustainable industrial power."],
    ["Farmer Integration", "Plasma and supply-chain programs support agricultural development."],
    ["Carbon Platform", "Future carbon credit infrastructure supports environmental asset creation."],
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        ESG & Sustainability
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-3 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
