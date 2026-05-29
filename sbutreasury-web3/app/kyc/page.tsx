export default function KYCPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">KYC / AML Onboarding</h1>
        <p className="mt-4 text-slate-400">
          Complete institutional onboarding before token purchase or treasury participation.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <ul className="space-y-4 text-slate-300">
            <li>✓ Identity verification</li>
            <li>✓ Source of funds declaration</li>
            <li>✓ Wallet ownership declaration</li>
            <li>✓ Compliance review</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
