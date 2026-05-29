import Link from "next/link";

export default function InvestorStatementPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        

        <div className="mt-10 rounded-3xl border border-emerald-400/40 bg-slate-950/80 p-8 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
          <h1 className="text-5xl font-black text-emerald-400">
            Investor Statement
          </h1>

          <p className="mt-4 text-slate-300">
            SBUTreasury investor account statement and blockchain settlement summary.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-900 p-6">
              <p className="text-slate-400">Investor Status</p>
              <h2 className="mt-3 text-3xl font-black text-emerald-400">
                Active
              </h2>
            </div>

            <div className="rounded-3xl bg-slate-900 p-6">
              <p className="text-slate-400">KYC Status</p>
              <h2 className="mt-3 text-3xl font-black text-emerald-400">
                Pending Review
              </h2>
            </div>

            <div className="rounded-3xl bg-slate-900 p-6">
              <p className="text-slate-400">Settlement Network</p>
              <h2 className="mt-3 text-3xl font-black text-emerald-400">
                Ethereum
              </h2>
            </div>
          </div>

<div className="mt-8 rounded-3xl border border-slate-700 bg-black/40 p-6">
  <p className="text-sm text-slate-400">
    Contract Address
  </p>

<a
  href="https://etherscan.io/token/0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-5
    inline-flex
    items-center
    gap-3
    rounded-2xl
    bg-emerald-400
    hover:bg-emerald-300
    px-8
    py-4
    text-2xl
    font-extrabold
    text-black
    shadow-[0_0_45px_rgba(16,185,129,0.95)]
    transition-all
  "
>
  <span className="text-black opacity-100">
    View on Etherscan
  </span>

  <span className="text-black text-3xl font-black">
    ↗
  </span>
</a>

</div>
        </div>
      </div>
    </section>
  );
}
