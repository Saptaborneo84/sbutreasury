export default function MonitorPage() {
  const cards = [
    ["Total Treasury Value", "$250,581,250"],
    ["USDC Treasury", "$157,000,000"],
    ["Live BTC Wallet Balance", "1,250 BTC"],
    ["BTC/USD Live Price", "$74,865"],
    ["BTC Treasury Value", "$93,581,250"],
    ["Webhook Status", "ONLINE"],
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        {cards.map(([label, value]) => (
          <div
            key={label}
            className="rounded-[2rem] border border-slate-800 bg-slate-900 p-10 shadow-xl"
          >
            <p className="text-2xl text-slate-400">{label}</p>

            <p className="mt-8 text-5xl font-black text-emerald-400">
              {value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
