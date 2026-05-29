"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed bottom-6 left-6 z-50 rounded-2xl bg-emerald-400 px-6 py-3 text-lg font-black text-black shadow-[0_0_30px_rgba(16,185,129,0.65)]"
    >
      ← Back
    </Link>
  );
}
