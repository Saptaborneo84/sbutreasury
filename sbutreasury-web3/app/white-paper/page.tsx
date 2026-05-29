"use client";

import Link from "next/link";

export default function WhitePaperPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">

      <div className="mx-auto max-w-6xl">

        

        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-[#07142b] p-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-5xl font-black text-emerald-400">
                SBUTreasury White Paper
              </h1>

              <p className="mt-3 text-xl text-slate-300">
                Institutional blockchain infrastructure backed by real-world assets
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="rounded-2xl bg-emerald-400 px-8 py-4 text-xl font-black text-black shadow-[0_0_30px_rgba(16,185,129,0.6)]"
            >
              Download / Print PDF
            </button>

          </div>

          <pre className="mt-10 whitespace-pre-wrap rounded-3xl bg-black/60 p-8 text-sm leading-relaxed text-slate-200 md:text-base">
{`SBUTREASURY WHITE PAPER

Version 1.0
May 2026

================================================================================

OVERVIEW

SBUTreasury is a blockchain-based institutional infrastructure platform
developed by PT Sapta Borneo Utama.

The ecosystem integrates:
• Tokenized bond infrastructure
• Agricultural asset backing
• Renewable energy integration
• Carbon credit monetization
• Institutional treasury systems

================================================================================

CORE ASSETS

• 16,000 Ha Plasma Sugarcane Partnerships
• 500 Ha Owned Agricultural Land
• Sugar Mill Infrastructure
• Biomass Power Generation
• Carbon Credit Ecosystem

================================================================================

TOKEN UTILITIES

SBU Token functions include:
• Treasury settlement
• Bond subscription
• Asset collateralization
• Carbon credit settlement
• Institutional payment infrastructure

================================================================================

BLOCKCHAIN

Network: Ethereum
Standard: ERC-20
Smart Contract Security:
• Multi-signature treasury
• Wallet whitelisting
• Institutional compliance layer
• Immutable transaction history

================================================================================

CONTACT

PT Sapta Borneo Utama
www.sbutreasury.com
info@saptaborneo.com

© 2026 PT Sapta Borneo Utama`}
          </pre>

        </div>
      </div>
    </section>
  );
}
