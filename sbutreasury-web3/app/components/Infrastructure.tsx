export default function Infrastructure() {
  const items = [
    {
      title: "Sugar Infrastructure",
      text: "Integrated sugar production platform with industrial-scale processing capacity.",
    },
    {
      title: "Biomass Energy",
      text: "Renewable biomass cogeneration supporting clean industrial energy.",
    },
    {
      title: "Digital Treasury",
      text: "Blockchain-enabled treasury monitoring, token analytics, and institutional reporting.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        Infrastructure Assets
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-3 text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
