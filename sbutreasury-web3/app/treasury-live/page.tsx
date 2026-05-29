export const dynamic = "force-dynamic";

export default async function TreasuryLivePage() {
  const res = await fetch(
    "https://sbutreasury.com/api/deposits",
    { cache: "no-store" }
  );

  const deposits = await res.json();

  const totalUSDC = deposits.reduce(
    (sum: number, d: any) =>
      sum + Number(d.amount || 0),
    0
  );

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-5xl font-bold">
        SBUTreasury Live Settlement
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Total Treasury Value
          </p>

          <h2 className="mt-4 text-4xl font-bold text-emerald-400">
            ${totalUSDC.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Settlement Transactions
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {deposits.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Blockchain Network
          </p>

          <h2 className="mt-4 text-4xl font-bold text-emerald-400">
            Ethereum
          </h2>
        </div>

      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-6 text-3xl font-bold">
          Live Settlement Feed
        </h2>

        <div className="space-y-4">
          {deposits.reverse().map((d: any, i: number) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-black p-5"
            >
              <div className="flex justify-between">

                <div>
                  <p className="font-bold">
                    {d.asset}
                  </p>

                  <p className="text-xs text-slate-500 break-all">
                    {d.hash}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-400">
                    ${Number(d.amount).toLocaleString()}
                  </p>

                  <p className="text-xs text-slate-500">
                    CONFIRMED
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
