"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToInvestor() {
  const pathname = usePathname();

  const pagesWithBackButton = [
    "/dashboard",
    "/token",
    "/documents",
    "/kyc",
    "/treasury",
    "/wallet",
    "/monitor",
    "/buy-token",
  ];

  if (!pagesWithBackButton.includes(pathname)) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pt-6">
      <Link
        href="/investor"
        className="inline-flex items-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
      >
        ← Back to Investor Portal
      </Link>
    </div>
  );
}
