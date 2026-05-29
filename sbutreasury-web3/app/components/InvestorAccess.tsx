export default function InvestorAccess() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
      <h2 className="text-3xl font-bold">
        Institutional Investor Access
      </h2>

      <p className="mt-4 max-w-3xl text-slate-400">
        Qualified institutional participants may request access to onboarding,
        KYC review, treasury documentation, and token allocation materials.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/investor"
          className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950"
        >
          Investor Portal
        </a>

        <a
          href="/kyc"
          className="rounded-xl border border-slate-700 px-6 py-3"
        >
          Start KYC
        </a>

        <a
          href="/documents"
          className="rounded-xl border border-slate-700 px-6 py-3"
        >
          Document Vault
        </a>
      </div>
    </section>
  );
}
