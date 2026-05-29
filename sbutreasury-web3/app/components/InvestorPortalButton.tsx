"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function InvestorPortalButton() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const { openConnectModal } = useConnectModal();

  const handleClick = () => {
    if (isConnected) {
      router.push("/investor");
      return;
    }

    if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-between rounded-3xl bg-emerald-400 px-8 py-8 text-black shadow-[0_0_35px_rgba(16,185,129,0.65)] transition-all hover:scale-[1.01]"
    >
      <span className="text-5xl">
        🔐
      </span>

      <div className="text-center">
        <div className="text-3xl font-black">
          Investor Portal
        </div>

        <div className="mt-1 text-sm font-semibold">
          Connect wallet to access
        </div>
      </div>

      <span className="text-5xl font-black">
        ›
      </span>
    </button>
  );
}
