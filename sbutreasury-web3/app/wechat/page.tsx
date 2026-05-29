"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ProtectedRoute from "../components/ProtectedRoute";

export default function WechatPage() {
  const { address } = useAccount();

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkStatus() {
      if (!address) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/investor-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet_address: address,
          }),
        });

        const data = await res.json();

        setVerified(data.verified === true);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    checkStatus();
  }, [address]);

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center text-white">
          Checking investor verification...
        </div>
      </ProtectedRoute>
    );
  }

  if (!verified) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl rounded-[2rem] border border-emerald-400/30 bg-[#07142b] p-10 text-center text-white shadow-[0_0_45px_rgba(16,185,129,0.18)]">
            <h1 className="text-4xl font-black text-emerald-400">
              Investor Verification Required
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Upload proof of transaction and wait for Treasury approval before
              accessing the Official Investor WeChat Group.
            </p>

            <a
              href="/payout"
              className="mt-8 inline-flex rounded-2xl bg-emerald-400 px-8 py-4 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]"
            >
              Go To Payout Center
            </a>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <section className="min-h-screen px-6 py-12 text-white">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-400/30 bg-[#07142b] p-10 shadow-[0_0_45px_rgba(16,185,129,0.18)]">

          <h1 className="text-center text-5xl font-black text-emerald-400">
            Official Investor WeChat Group
          </h1>

          <p className="mt-6 text-center text-xl text-slate-300">
            Your wallet has been verified by SBUTreasury.
          </p>

          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-black/40 p-8 text-center">
            <div className="text-6xl">✅</div>

            <h2 className="mt-4 text-3xl font-black text-emerald-400">
              Investor Access Approved
            </h2>

            <p className="mt-4 text-slate-300">
              You may now join the Official Investor WeChat Group.
            </p>

            <a
              href="https://weixin.qq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-emerald-400 px-10 py-5 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]"
            >
              Join Official Investor WeChat Group
            </a>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
