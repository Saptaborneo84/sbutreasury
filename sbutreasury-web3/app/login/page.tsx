"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      router.push("/investor");
    }
  }, [isConnected, address, router]);

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-emerald-400/30 bg-[#07142b] p-10 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
        <h1 className="text-5xl font-black text-emerald-400">
          Investor Login
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          Connect your wallet to access the Investor Portal.
        </p>

        <div className="mt-10 flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}
