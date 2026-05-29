"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WalletPage() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      router.push("/investor");
    }
  }, [isConnected, address, router]);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-500/30 bg-slate-900 p-10 text-center">
        <h1 className="text-5xl font-black text-emerald-400">
          Connect Investor Wallet
        </h1>

        <p className="mt-6 text-slate-400">
          Connect your Ethereum wallet to access the SBUTreasury Investor Portal.
        </p>

        <div className="mt-10 flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </main>
  );
}
