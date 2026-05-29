import Link from "next/link";

export default function DocumentsPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-6xl font-black text-emerald-400">
          Document Vault
        </h1>

        <p className="mt-4 text-2xl text-slate-300">
          Institutional review documents
        </p>

        <div className="mt-12 space-y-8">

          {/* KYC */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#07142b] p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <div className="flex items-center justify-between gap-5">

              <div className="flex items-center gap-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/40 bg-black/30 text-5xl text-emerald-400">
                  🛡️
                </div>

                <div>
                  <h2 className="text-5xl font-black text-white">
                    KYC / EDD Pack
                  </h2>

                  <p className="mt-4 text-2xl text-slate-300">
                    Available for approved institutional review.
                  </p>
                </div>
              </div>

              <Link
                href="/kyc"
                className="rounded-2xl bg-emerald-400 px-10 py-5 text-2xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.8)]"
              >
                View →
              </Link>
            </div>
          </div>

          {/* OFFERING MEMORANDUM */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#07142b] p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]">

            <div className="flex items-center justify-between gap-5">

              <div className="flex items-center gap-5">

                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/40 bg-black/30 text-5xl text-emerald-400">
                  📘
                </div>

                <div>
                  <h2 className="text-5xl font-black text-white">
                    Offering Memorandum
                  </h2>

                  <p className="mt-4 text-2xl text-slate-300">
                    Complete offering details and terms
                  </p>
                </div>
              </div>

              <Link
                href="/offering-memorandum"
                className="rounded-2xl bg-emerald-400 px-10 py-5 text-2xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.8)]"
              >
                View →
              </Link>
            </div>
          </div>

          {/* Asset Backing */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#07142b] p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]">

            <div className="flex items-center justify-between gap-5">

              <div className="flex items-center gap-5">

                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/40 bg-black/30 text-5xl text-emerald-400">
                  🏛️
                </div>

                <div>
                  <h2 className="text-5xl font-black text-white">
                    Asset Backing Memo
                  </h2>

                  <p className="mt-4 text-2xl text-slate-300">
                    Available for approved institutional review.
                  </p>
                </div>
              </div>

              <Link
                
href="/white-paper"
                className="rounded-2xl bg-emerald-400 px-10 py-5 text-2xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.8)]"
              >
                View →
              </Link>
            </div>
          </div>

          {/* Risk */}
          <div className="rounded-3xl border border-cyan-500/30 bg-[#07142b] p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]">

            <div className="flex items-center justify-between gap-5">

              <div className="flex items-center gap-5">

                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/40 bg-black/30 text-5xl text-emerald-400">
                  ⚠️
                </div>

                <div>
                  <h2 className="text-5xl font-black text-white">
                    Risk Disclosure
                  </h2>

                  <p className="mt-4 text-2xl text-slate-300">
                    Available for approved institutional review.
                  </p>
                </div>
              </div>

              <Link
                href="/risk-disclosure"
                className="rounded-2xl bg-emerald-400 px-10 py-5 text-2xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.8)]"
              >
                View →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
