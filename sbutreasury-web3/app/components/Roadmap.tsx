export default function Roadmap() {
  const phases = [
    ["Phase 1", "Institutional Website", "Investor portal, treasury dashboard, and document vault deployment."],
    ["Phase 2", "Wallet Integration", "MetaMask connection, public wallet verification, and token monitoring."],
    ["Phase 3", "Token Analytics", "ERC-20 supply, treasury balance, and Etherscan verification integration."],
    ["Phase 4", "Compliance Layer", "KYC onboarding, admin review, and institutional access permissions."],
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        Platform Roadmap
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {phases.map(([phase, title, text]) => (
          <div
            key={phase}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="text-sm text-emerald-400">{phase}</div>
            <h3 className="mt-2 text-xl font-bold">{title}</h3>
            <p className="mt-3 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
