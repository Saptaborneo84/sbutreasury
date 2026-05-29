"use client";

import { useEffect, useState } from "react";

export default function DepositsPage() {
  const [deposits, setDeposits] = useState<any[]>([]);

  async function loadDeposits() {
    const res = await fetch("/api/deposits");
    const data = await res.json();
    setDeposits(data.reverse());
  }

  useEffect(() => {
    loadDeposits();

    const interval = setInterval(loadDeposits, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        SBUTreasury Deposits
      </h1>

      {deposits.length === 0 ? (
        <p>No deposits detected.</p>
      ) : (
        <div className="space-y-4">
          {deposits.map((deposit, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    {deposit.asset}
                  </p>

                  <p className="text-slate-400 text-sm">
                    From: {deposit.from}
                  </p>

                  <p className="text-slate-400 text-sm">
                    TX: {deposit.hash}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-400">
                    {deposit.amount}
                  </p>

                  <p className="text-sm text-slate-400">
                    Ethereum Mainnet
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
