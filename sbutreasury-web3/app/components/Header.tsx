"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isConnected) {
      if (pathname === "/" || pathname === "/login") {
        router.push("/investor");
      }
    } else {
      if (
        pathname.startsWith("/investor") ||
        pathname.startsWith("/token") ||
        pathname.startsWith("/buy-token") ||
        pathname.startsWith("/wallet")
      ) {
        router.push("/");
      }
    }
  }, [isConnected, pathname, router]);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-black text-emerald-400"
        >
          PT Sapta Borneo Utama
        </Link>

        <nav className="hidden gap-6 text-slate-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/legal">Legal</Link>
        </nav>

        <div className="rounded-2xl bg-emerald-400 p-[2px] shadow-[0_0_30px_rgba(16,185,129,0.6)]">
          <div className="rounded-2xl bg-black px-4 py-2">
            <ConnectButton />
          </div>
        </div>

      </div>
    </header>
  );
}
