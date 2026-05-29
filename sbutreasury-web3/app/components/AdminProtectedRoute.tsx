"use client";

import { useAccount } from "wagmi";

const TREASURY_WALLET =
  "0xf6E7C9d6E8F73F32cB26B4f5a598a56C954c2286".toLowerCase();

export default function AdminProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Connect Treasury Wallet
      </div>
    );
  }

  if (
    address?.toLowerCase() !== TREASURY_WALLET
  ) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="max-w-xl rounded-3xl border border-red-500/30 bg-[#07142b] p-10 text-center text-white">

          <div className="text-6xl">
            🚫
          </div>

          <h1 className="mt-4 text-4xl font-black text-red-400">
            ACCESS DENIED
          </h1>

          <p className="mt-4 text-slate-300">
            Only the SBUTreasury Treasury Wallet
            may access this dashboard.
          </p>

          <p className="mt-6 break-all text-sm text-red-300">
            Connected Wallet:
            <br />
            {address}
          </p>

        </div>
      </div>
    );
  }

  return <>{children}</>;
}
