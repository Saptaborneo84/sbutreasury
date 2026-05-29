"use client";
import ProtectedRoute from "../components/ProtectedRoute";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance, useSendTransaction } from "wagmi";
import { parseEther } from "viem";

const TREASURY_WALLET = "0xf6E7C9d6E8F73F32cB26B4f5a598a56C954c2286";
const WECHAT_GROUP_LINK =
  "https://weixin.qq.com/g/CQYAABneM90ePSVFcrhrIGspXfhVkJDxWa6v9iziuRg5hpYUmZ7jarx7OkCAPjPj";

export default function BuyTokenPage() {
  const { address, isConnected } = useAccount();

  const {
    data: balance,
    refetch: refetchBalance,
    isLoading: balanceLoading,
  } = useBalance({
    address,
    query: {
      enabled: !!address,
      refetchInterval: 5000,
    },
  });

  const { sendTransactionAsync, isPending } = useSendTransaction();

  const [amount, setAmount] = useState("1");
  const [status, setStatus] = useState("");
  const [txHash, setTxHash] = useState("");

  async function buyToken() {
    try {
      const ethAmount = Number(amount);

      if (!isConnected) {
        setStatus("Please connect wallet first.");
        return;
      }

      if (ethAmount < 1) {
        setStatus("Minimum purchase is 1 ETH.");
        return;
      }

      setStatus("Waiting for wallet confirmation...");

      const tx = await sendTransactionAsync({
        to: TREASURY_WALLET,
        value: parseEther(amount),
      });

      setTxHash(tx);
      setStatus("Transaction submitted successfully.");
      refetchBalance();
    } catch (err) {
      console.error(err);
      setStatus("Transaction cancelled or failed.");
    }
  }

  const purchaseSuccess = status === "Transaction submitted successfully.";

  return (
    <ProtectedRoute>
      <section className="min-h-screen px-5 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-[2rem] border border-emerald-400/30 bg-[#07142b] p-6 shadow-[0_0_45px_rgba(16,185,129,0.18)] sm:p-10">

          <h1 className="text-4xl font-black text-emerald-400 sm:text-6xl">
            Buy SBU Token
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-2xl">
            Purchase is available only for verified investors with a connected wallet.
          </p>

          <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
            <p className="text-slate-400">
              Connected Wallet
            </p>

            <div className="mt-4">
              <ConnectButton />
            </div>

            <p className="mt-5 break-all text-emerald-300">
              {address || "No wallet connected"}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-black/40 p-6">
              <p className="text-slate-400">
                Available ETH Balance
              </p>

              <h2 className="mt-3 text-4xl font-black text-emerald-400 sm:text-5xl">
                {balanceLoading
                  ? "Loading..."
                  : balance
                  ? `${Number(balance.formatted).toFixed(4)} ETH`
                  : "0.0000 ETH"}
              </h2>

              <button
                onClick={() => refetchBalance()}
                className="mt-5 rounded-xl bg-emerald-400 px-5 py-3 font-black text-black"
              >
                Refresh ETH Balance
              </button>
            </div>

            <div className="rounded-3xl bg-black/40 p-6">
              <p className="text-slate-400">
                Minimum Purchase
              </p>

              <h2 className="mt-3 text-4xl font-black text-emerald-400 sm:text-5xl">
                1 ETH
              </h2>

              <p className="mt-4 text-slate-400">
                Investor invitation is issued after successful token purchase.
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
            <label className="text-slate-300">
              Purchase Amount ETH
            </label>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              min="1"
              step="0.01"
              className="mt-3 w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-3xl font-black text-white outline-none"
            />

            <button
              onClick={buyToken}
              disabled={isPending}
              className="mt-6 w-full rounded-2xl bg-emerald-400 px-8 py-5 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)] disabled:opacity-60 sm:text-2xl"
            >
              {isPending ? "Processing..." : "Buy Token / Deposit ETH"}
            </button>

            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-black/40 p-4">
              <p className="text-center text-slate-300">
                All purchases are settled directly to the secured PT Sapta Borneo Utama treasury infrastructure.
              </p>
              <p className="mt-2 text-center font-bold text-emerald-400">
                Treasury wallet details are confidential and not publicly displayed.
              </p>
            </div>

            {status && (
              <div className="mt-6 rounded-3xl border border-emerald-400/30 bg-black/60 p-6">
                <p className="break-all text-emerald-300">
                  {status}
                </p>

                {txHash && (
                  <a
                    href={`https://etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-emerald-400 underline"
                  >
                    View Transaction on Etherscan ↗
                  </a>
                )}
              </div>
            )}

            {purchaseSuccess && (
              <div className="mt-8 rounded-[2rem] border border-emerald-400/30 bg-gradient-to-br from-[#07142b] to-black p-8 text-center shadow-[0_0_45px_rgba(16,185,129,0.22)]">

                <div className="text-6xl">
                  🎉
                </div>

                <h2 className="mt-4 text-3xl font-black text-emerald-400 sm:text-4xl">
                  Investor Invitation Activated
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Your SBU Treasury token purchase has been submitted.
                  You are invited to join the official PT Sapta Borneo Utama
                  investor communication group for project updates,
                  treasury notices, investor relations, and subscription guidance.
                </p>

                <a
                  href={WECHAT_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-400 px-8 py-5 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.75)] transition hover:scale-[1.02] sm:w-auto"
                >
                  Join Official WeChat Investor Group →
                </a>

                <p className="mt-4 text-sm text-slate-500">
                  Access is intended for verified investors and token purchasers only.
                </p>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
    </ProtectedRoute>
  );
}
