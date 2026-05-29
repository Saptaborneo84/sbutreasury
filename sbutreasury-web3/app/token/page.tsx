import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

export default function TokenPage() {
  return (
    <ProtectedRoute>
      <section className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-3xl border border-blue-500/20 bg-[#07142b] p-8 shadow-[0_0_40px_rgba(16,185,129,0.12)]">

          <h1 className="text-5xl font-black text-white">
            SBU Treasury Digital Bond 2035
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Institutional-grade asset-backed digital security infrastructure.
          </p>

          <div className="mt-10 rounded-3xl border border-blue-500/20 bg-[#07142b] p-8">

            <h2 className="text-3xl font-black text-white">
              Recent On-Chain Activity
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex items-center justify-between rounded-xl bg-[#07142b] p-4 border border-blue-500/20">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                    <span>Mint</span>
                  </div>

                  <p className="mt-1 text-slate-300">
                    0xabc123...
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-white">
                    $50,000,000.00
                  </p>

                  <p className="text-slate-300">
                    1h ago
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#07142b] p-4 border border-blue-500/20">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                    <span>Reserve Deposit</span>
                  </div>

                  <p className="mt-1 text-slate-300">
                    0xdef456...
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-white">
                    $50,000,000.00
                  </p>

                  <p className="text-slate-300">
                    2h ago
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#07142b] p-4 border border-blue-500/20">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="h-3 w-3 rounded-full bg-orange-400"></span>
                    <span>Redemption</span>
                  </div>

                  <p className="mt-1 text-slate-300">
                    0xghi789...
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-white">
                    $10,000,000.00
                  </p>

                  <p className="text-slate-300">
                    3h ago
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://etherscan.io/token/0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-400 px-6 py-3 font-black text-black shadow-[0_0_30px_rgba(16,185,129,0.6)]"
              >
                ↗ View on Etherscan
              </a>

              <button className="rounded-2xl border border-blue-500/30 bg-[#07142b] px-6 py-3 font-black text-white">
                ↗ CoinGecko
              </button>

              <button className="rounded-2xl border border-blue-500/30 bg-[#07142b] px-6 py-3 font-black text-white">
                ↗ CoinMarketCap
              </button>

            </div>

          </div>

        </div>

      </div>
      </section>
    </ProtectedRoute>
  );
}