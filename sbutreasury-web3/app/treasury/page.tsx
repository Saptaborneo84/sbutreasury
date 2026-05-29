export default function TreasuryPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          Treasury Dashboard
        </h1>

        <p className="mt-4 text-slate-400">
          Institutional treasury and digital asset infrastructure overview.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          {[
            ["Treasury Value", "$1,000,000,000"],
            ["Token Supply", "1,000,000,000 SBU"],
            ["Collateral", "$1.2B Assets"],
            ["Blockchain", "Ethereum"],
            ["Project", "Sugar & Biomass"],
            ["Status", "Operational"],
            ["Wallet Security", "Protected"],
            ["Compliance", "KYC / AML"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="text-sm text-slate-400">
                {label}
              </div>

              <div className="mt-3 text-xl font-bold">
                {value}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Treasury Overview
          </h2>

          <p className="mt-4 text-slate-400">
            SBUTreasury is designed as an institutional-grade digital asset
            infrastructure platform integrating agribusiness collateral,
            renewable energy assets, treasury monitoring, and blockchain-based
            settlement systems.
          </p>
        </div>

      </div>
    </main>
  );
}
