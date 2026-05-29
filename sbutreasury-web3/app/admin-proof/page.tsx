"use client";

import { useEffect, useState } from "react";

export default function AdminProofPage() {
  const [records, setRecords] = useState<any>({});

  async function loadRecords() {
    const res = await fetch("/api/admin-proof");
    const data = await res.json();
    setRecords(data);
  }

  async function updateStatus(wallet: string, action: string) {
    await fetch("/api/admin-proof", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wallet_address: wallet, action }),
    });

    loadRecords();
  }

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <section className="min-h-screen px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-black text-emerald-400">
          Admin Proof Review
        </h1>

        <p className="mt-4 text-slate-300">
          Review investor proof submissions and approve WeChat / payout access.
        </p>

        <div className="mt-8 grid gap-6">
          {Object.values(records).map((record: any) => (
            <div
              key={record.wallet_address}
              className="rounded-3xl border border-emerald-400/30 bg-[#07142b] p-6"
            >
              <p className="break-all text-emerald-300">
                Wallet: {record.wallet_address}
              </p>

              <p className="mt-3 text-slate-300">
                Status: <b>{record.status}</b>
              </p>

              <p className="mt-3 break-all text-slate-300">
                TX: {record.tx_hash || "N/A"}
              </p>

              <p className="mt-3 text-slate-300">
                TRN: {record.trn || "N/A"}
              </p>

              <p className="mt-3 text-slate-300">
                UETR: {record.uetr || "N/A"}
              </p>

              {record.ipfs_url && (
                <a
                  href={record.ipfs_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-emerald-400 underline"
                >
                  View Proof →
                </a>
              )}

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => updateStatus(record.wallet_address, "approve")}
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-black text-black"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(record.wallet_address, "reject")}
                  className="rounded-2xl bg-red-500 px-6 py-3 font-black text-white"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
