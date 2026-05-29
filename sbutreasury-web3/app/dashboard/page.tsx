export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold">SBUTreasury Dashboard</h1>
        <p className="mt-4 text-slate-400">
          Institutional treasury dashboard for tokenized agribusiness and renewable energy assets.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Total Issue", "$1B"],
            ["Annual Return", "3%"],
            ["Maturity", "2035"],
            ["Collateral", "$1.2B"],
            ["Network", "Ethereum"],
            ["Status", "Active"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-3 text-3xl font-bold text-emerald-400">{value}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
