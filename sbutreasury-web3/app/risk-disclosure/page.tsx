"use client";

import Link from "next/link";

const risks = [
  {
    icon: "📈",
    title: "Market Risk",
    desc: "Commodity price volatility and market conditions.",
    level: "Moderate",
    score: 45,
    color: "orange",
  },
  {
    icon: "👥",
    title: "Credit Risk",
    desc: "Counterparty default and payment obligations.",
    level: "Low",
    score: 20,
    color: "green",
  },
  {
    icon: "🔒",
    title: "Liquidity Risk",
    desc: "Token transferability and investor exit strategy.",
    level: "Moderate",
    score: 40,
    color: "orange",
  },
  {
    icon: "🛠️",
    title: "Operational Risk",
    desc: "System failures and process disruptions.",
    level: "Low",
    score: 22,
    color: "green",
  },
];

export default function RiskDisclosurePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020817] via-[#071a44] to-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        

        <div className="mt-10">
          <h1 className="text-5xl font-black text-white">
            Risk Disclosure
          </h1>

          <p className="mt-3 text-xl text-slate-300">
            Comprehensive risk factors and mitigation disclosures
          </p>
        </div>

        <div className="mt-8 rounded-2xl border-l-8 border-emerald-500 bg-emerald-500/10 p-8">
          <div className="flex gap-5">

            <div className="text-4xl text-emerald-400">
              ✅
            </div>

            <div>
              <h2 className="text-3xl font-black text-emerald-400">
                Risk Framework Active
              </h2>

              <p className="mt-3 text-xl text-slate-200">
                All material risks have been identified, assessed,
                and mitigated where possible.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-[#07142b] p-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">

          <h2 className="text-3xl font-black text-white">
            Risk Exposure Overview
          </h2>

          <div className="mt-10 space-y-8">

            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-2xl border border-slate-700 bg-black/30 p-6"
              >

                <div className="flex items-start justify-between gap-5">

                  <div className="flex gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl">
                      {risk.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {risk.title}
                      </h3>

                      <p className="mt-2 text-slate-300">
                        {risk.desc}
                      </p>
                    </div>

                  </div>

                  <div
                    className={
                      risk.color === "green"
                        ? "rounded-xl bg-emerald-500/20 px-4 py-2 font-black text-emerald-400"
                        : "rounded-xl bg-orange-500/20 px-4 py-2 font-black text-orange-400"
                    }
                  >
                    {risk.level}
                  </div>

                </div>

                <div className="mt-5">

                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span className="text-slate-300">Risk Score</span>

                    <span
                      className={
                        risk.color === "green"
                          ? "text-emerald-400"
                          : "text-orange-400"
                      }
                    >
                      {risk.score}/100
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">

                    <div
                      className={
                        risk.color === "green"
                          ? "h-3 rounded-full bg-emerald-400"
                          : "h-3 rounded-full bg-orange-400"
                      }
                      style={{ width: `${risk.score}%` }}
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-10">
            <button
              onClick={() => window.print()}
              className="rounded-2xl bg-emerald-400 px-8 py-4 text-xl font-black text-black shadow-[0_0_40px_rgba(16,185,129,0.8)]"
            >
              View Full Disclosure
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
