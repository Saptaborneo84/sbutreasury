export default function FinalCTA() {
  return (
    <section className="mt-16 mb-16 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
      <h2 className="text-4xl font-bold">
        Institutional Access to Real-World Asset Infrastructure
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Explore SBUTreasury’s tokenized infrastructure platform, treasury
        dashboard, wallet verification, and institutional onboarding workflow.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/wallet"
          className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950"
        >
          Connect Wallet
        </a>

        <a
          href="/documents"
          className="rounded-xl border border-slate-700 px-6 py-3"
        >
          View Documents
        </a>
      </div>
    </section>
  );
}
