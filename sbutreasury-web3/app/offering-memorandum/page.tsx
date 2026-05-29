"use client";

import Link from "next/link";

export default function OfferingMemorandumPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        

        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-[#07142b] p-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-5xl font-black text-emerald-400">
                Offering Memorandum
              </h1>

              <p className="mt-3 text-xl text-slate-300">
                Complete offering details and terms
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
{`OFFERING MEMORANDUM

SBUTreasury Tokenized Bond 2035
USD 1,000,000,000 Tokenized Corporate Bond

Issued by:
PT Sapta Borneo Utama
Majalengka, West Java, Indonesia

Date: May 28, 2026

================================================================================

IMPORTANT NOTICE

This Offering Memorandum (the "Memorandum") is confidential and is being furnished solely for the purpose of enabling prospective investors to consider the purchase of the SBUTreasury Tokenized Bond 2035 (the "Bonds").

================================================================================

Issuer: PT Sapta Borneo Utama
Token Symbol: SBU
Blockchain: Ethereum (ERC-20)

Token Contract:
0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912

Coupon Rate: 3% per annum
Tenor: 10 years
Minimum Investment: USD 100,000

© 2026 PT Sapta Borneo Utama`}
          </pre>

        </div>
      </div>
    </section>
  );
}
