import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-400/20 bg-[#061225]">
      <div className="mx-auto max-w-7xl px-5 py-12">

        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-[#07142b] to-black p-6 shadow-[0_0_45px_rgba(16,185,129,0.15)] sm:p-10">

          <h2 className="text-center text-3xl font-black text-white sm:text-4xl">
            Security Verification Center
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">
            Independent blockchain verification, contract transparency,
            token monitoring, and institutional-grade security validation.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
              <div className="text-4xl">🟢</div>
              <h3 className="mt-4 text-xl font-black text-emerald-400">
                Contract Verified
              </h3>
              <p className="mt-2 text-slate-400">
                Open-source smart contract verified on Ethereum.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
              <div className="text-4xl">🛡️</div>
              <h3 className="mt-4 text-xl font-black text-emerald-400">
                Security Audited
              </h3>
              <p className="mt-2 text-slate-400">
                Monitored through GoPlus Security intelligence.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
              <div className="text-4xl">🔗</div>
              <h3 className="mt-4 text-xl font-black text-emerald-400">
                Blockchain Transparency
              </h3>
              <p className="mt-2 text-slate-400">
                Public on-chain verification and token monitoring.
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col items-center gap-5">

            <a
              href="https://etherscan.io/address/0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912#cards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-10 py-5 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.75)] transition hover:scale-105"
            >
              🔍 View Security Audit on Etherscan
            </a>

            <Link
              href="/security"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/30 bg-black/40 px-10 py-5 text-xl font-black text-emerald-400 transition hover:bg-emerald-400/10"
            >
              🛡️ GoPlus Security Verification
            </Link>

          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            © 2026 PT Sapta Borneo Utama
            <br />
            Institutional Treasury Platform
          </div>

        </div>

      </div>
    </footer>
  );
}
