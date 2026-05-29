"use client";

import { useEffect, useState } from "react";
import AdminProtectedRoute from "../components/AdminProtectedRoute";

export default function AdminDashboard() {
  const [records, setRecords] = useState<any>({});

  async function loadData() {
    const res = await fetch("/api/admin-proof");
    const data = await res.json();
    setRecords(data);
  }

  async function updateStatus(
    wallet: string,
    action: "approve" | "reject"
  ) {
    await fetch("/api/admin-proof", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wallet_address: wallet,
        action,
      }),
    });

    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  const investors = Object.values(records) as any[];

  const totalInvestors = investors.length;
  const pending = investors.filter(
    (x) => x.status === "pending_review"
  ).length;

  const approved = investors.filter(
    (x) => x.status === "approved"
  ).length;

  const rejected = investors.filter(
    (x) => x.status === "rejected"
  ).length;

  return (
    <AdminProtectedRoute>
      <section className="min-h-screen bg-black px-6 py-12 text-white">

        <div className="mx-auto max-w-7xl">

          <h1 className="text-6xl font-black text-emerald-400">
            SBUTreasury Control Center
          </h1>

          <p className="mt-3 text-slate-300">
            PT Sapta Borneo Utama
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-emerald-400/20 bg-[#07142b] p-6">
              <div className="text-slate-400">
                Total Investors
              </div>

              <div className="mt-3 text-5xl font-black text-emerald-400">
                {totalInvestors}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-[#07142b] p-6">
              <div className="text-slate-400">
                Pending Reviews
              </div>

              <div className="mt-3 text-5xl font-black text-yellow-400">
                {pending}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/20 bg-[#07142b] p-6">
              <div className="text-slate-400">
                Approved
              </div>

              <div className="mt-3 text-5xl font-black text-emerald-400">
                {approved}
              </div>
            </div>

            <div className="rounded-3xl border border-red-500/20 bg-[#07142b] p-6">
              <div className="text-slate-400">
                Rejected
              </div>

              <div className="mt-3 text-5xl font-black text-red-400">
                {rejected}
              </div>
            </div>

          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-emerald-400/20">

            <table className="w-full text-sm">

              <thead className="bg-[#07142b]">
                <tr>
                  <th className="p-4 text-left">Wallet</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">AML</th>
                  <th className="p-4 text-left">WeChat</th>
                  <th className="p-4 text-left">Payout</th>
                  <th className="p-4 text-left">Proof</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>

                {investors.map((r: any) => {

                  const approvedInvestor =
                    r.status === "approved";

                  return (
                    <tr
                      key={r.wallet_address}
                      className="border-t border-slate-800"
                    >

                      <td className="p-4 break-all">
                        {r.wallet_address}
                      </td>

                      <td className="p-4">

                        {approvedInvestor ? (
                          <span className="rounded-xl bg-emerald-400/20 px-3 py-1 text-emerald-400">
                            VERIFIED INVESTOR
                          </span>
                        ) : r.status === "rejected" ? (
                          <span className="rounded-xl bg-red-500/20 px-3 py-1 text-red-400">
                            REJECTED
                          </span>
                        ) : (
                          <span className="rounded-xl bg-yellow-500/20 px-3 py-1 text-yellow-400">
                            PENDING REVIEW
                          </span>
                        )}

                      </td>

                      <td className="p-4">
                        <span className="rounded-xl bg-emerald-400/20 px-3 py-1 text-emerald-400">
                          PASSED
                        </span>
                      </td>

                      <td className="p-4">
                        {approvedInvestor ? "✅" : "❌"}
                      </td>

                      <td className="p-4">
                        {approvedInvestor ? "✅" : "❌"}
                      </td>

                      <td className="p-4">

                        {r.ipfs_url ? (
                          <a
                            href={r.ipfs_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 underline"
                          >
                            View Proof
                          </a>
                        ) : (
                          "N/A"
                        )}

                      </td>

                      <td className="p-4">

                        <div className="flex flex-wrap gap-2">

                          <button
                            onClick={() =>
                              updateStatus(
                                r.wallet_address,
                                "approve"
                              )
                            }
                            className="rounded-xl bg-emerald-400 px-4 py-2 font-black text-black"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(
                                r.wallet_address,
                                "reject"
                              )
                            }
                            className="rounded-xl bg-red-500 px-4 py-2 font-black text-white"
                          >
                            Reject
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>

      </section>
    </AdminProtectedRoute>
  );
}
