export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 text-center">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <h1 className="text-7xl font-black tracking-tight bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
        SBUTreasury
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
        Institutional digital asset infrastructure platform backed by
        agribusiness, renewable energy, and blockchain treasury systems.
      </p>

<div> 
        <a
          href="/documents"
          className="rounded-xl border border-slate-700 px-6 py-3"
        >
          Offering Documents
        </a>
      </div>
    </section>
  );
}
