export default function ContractVerification() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold">
        Smart Contract Verification
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-emerald-400">
            ✅ Contract Verified
          </div>
          <p className="mt-2 text-slate-400">
            Source code verified on Etherscan.
          </p>
        </div>

        <div>
          <div className="text-yellow-400">
            🔍 Audit Status
          </div>
          <p className="mt-2 text-slate-400">
            Independent security audit pending publication.
          </p>
        </div>

        <div>
          <div className="text-emerald-400">
            🔐 Governance
          </div>
          <p className="mt-2 text-slate-400">
            Multisig governance disclosure pending verification.
          </p>
        </div>
      </div>

      <a
        href="https://etherscan.io/token/0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912"
        target="_blank"
        className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950"
      >
        View on Etherscan
      </a>
    </section>
  );
}
