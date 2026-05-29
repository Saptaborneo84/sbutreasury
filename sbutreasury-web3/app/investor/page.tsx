"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import ProtectedRoute from "../components/ProtectedRoute";

const TOKEN_ADDRESS =
  "0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912";

const TREASURY_WALLET =
  "0xf6E7C9d6E8F73F32cB26B4f5a598a56C954c2286".toLowerCase();

export default function InvestorPage() {
  const { address } = useAccount();
  const [status, setStatus] = useState("pending_review");
  const [verificationDate, setVerificationDate] = useState("Pending");

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "Not Connected";

  const isTreasury =
    address?.toLowerCase() === TREASURY_WALLET;

  const isApproved = status === "approved";

  useEffect(() => {
    async function loadStatus() {
      if (!address) return;

      try {
        const res = await fetch("/api/investor-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wallet_address: address }),
        });

        const data = await res.json();

        setStatus(data.status || "pending_review");

        if (data.proof) {
          setVerificationDate(new Date().toLocaleDateString());
        }
      } catch {
        setStatus("pending_review");
      }
    }

    loadStatus();
  }, [address]);

  return (
    <ProtectedRoute>
      <section className="min-h-screen bg-gradient-to-b from-black via-[#051122] to-black px-5 py-8 text-white">
        <div className="mx-auto max-w-7xl">

          {isTreasury && (
            <div className="mb-6 inline-flex rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-lg font-black text-emerald-400">
              👑 TREASURY ADMIN WALLET
            </div>
          )}

          <div className="rounded-[2rem] border border-emerald-400/20 bg-[#07142b]/90 p-6 shadow-[0_0_60px_rgba(16,185,129,0.15)] sm:p-10">

            <h1 className="text-5xl font-black text-emerald-400 sm:text-7xl">
              Investor Portal
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-300 sm:text-2xl">
              Institutional Digital Asset Infrastructure for PT Sapta Borneo Utama.
            </p>

            <div className="mt-10 rounded-[2rem] border border-emerald-400/30 bg-black/40 p-6 sm:p-8">
              <div className="mb-6 inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-widest text-emerald-400">
                Investor Profile
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Investor ID</p>
                  <p className="mt-2 text-xl font-black text-emerald-400">
                    SBU-2026-{shortAddress.replace("...", "").toUpperCase()}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Wallet Address</p>
                  <p className="mt-2 break-all text-xl font-black text-emerald-400">
                    {shortAddress}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Investor Status</p>
                  <p className={isApproved ? "mt-2 text-xl font-black text-emerald-400" : "mt-2 text-xl font-black text-yellow-400"}>
                    {isApproved ? "VERIFIED INVESTOR" : "PENDING REVIEW"}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">AML Status</p>
                  <p className="mt-2 text-xl font-black text-emerald-400">
                    PASSED
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">WeChat Access</p>
                  <p className={isApproved ? "mt-2 text-xl font-black text-emerald-400" : "mt-2 text-xl font-black text-red-400"}>
                    {isApproved ? "UNLOCKED" : "LOCKED"}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Payout Access</p>
                  <p className={isApproved ? "mt-2 text-xl font-black text-emerald-400" : "mt-2 text-xl font-black text-red-400"}>
                    {isApproved ? "ACTIVE" : "LOCKED"}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5 md:col-span-2 lg:col-span-3">
                  <p className="text-slate-400">Verification Date</p>
                  <p className="mt-2 text-xl font-black text-emerald-400">
                    {verificationDate}
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-black/40 p-8">
              <div className="text-sm uppercase tracking-widest text-slate-400">
                Smart Contract
              </div>

              <div className="mt-4 break-all text-lg font-black text-emerald-400">
                {TOKEN_ADDRESS}
              </div>

              <a
                href={`https://etherscan.io/token/${TOKEN_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-emerald-400 px-8 py-4 text-lg font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]"
              >
                Verify Contract on Ethereum ↗
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

              <Link
                href="/buy-token"
                className="rounded-2xl bg-emerald-400 p-5 text-center text-xl font-black text-black"
              >
                💎 Buy Token
              </Link>

              <Link
                href="/payout"
                className="rounded-2xl bg-emerald-400 p-5 text-center text-xl font-black text-black"
              >
                💰 Payout Center
              </Link>

              <Link
                href="/wechat"
                className="rounded-2xl bg-emerald-400 p-5 text-center text-xl font-black text-black"
              >
                💬 Investor WeChat
              </Link>

              {isTreasury && (
                <Link
                  href="/admin-dashboard"
                  className="rounded-2xl bg-yellow-400 p-5 text-center text-xl font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.5)]"
                >
                  🛡️ Admin Dashboard
                </Link>
              )}

            </div>

          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
