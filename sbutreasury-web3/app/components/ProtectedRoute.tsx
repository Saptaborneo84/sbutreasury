"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07142b] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-emerald-400">
            Investor Access Only
          </h1>
          <p className="mt-4 text-slate-300">
            Please connect your wallet to continue.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
