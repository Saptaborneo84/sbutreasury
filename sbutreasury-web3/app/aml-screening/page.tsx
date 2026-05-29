"use client";

import { useState } from "react";

export default function AMLScreeningPage() {
  const [prompt, setPrompt] = useState("PT Sapta Borneo Utama");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function runCheck() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/aml-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        error: "AML screening failed",
      });
    }

    setLoading(false);
  }

  const matches = result?.["search results"]?.length ?? 0;
  const passed = result && matches === 0 && !result.error;

  return (
    <section className="min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-emerald-400/30 bg-[#07142b] p-8 shadow-[0_0_45px_rgba(16,185,129,0.18)]">

          <h1 className="text-5xl font-black text-emerald-400">
            AML / Sanctions Screening
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Institutional compliance screening against OFAC, UN, EU, UK, DFAT, ITA and SECO watchlists.
          </p>

          <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
            <label className="text-slate-300">
              Entity / Individual Name
            </label>

            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-xl font-bold text-white outline-none"
              placeholder="Enter entity or individual name"
            />

            <button
              onClick={runCheck}
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-emerald-400 px-8 py-5 text-2xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)] disabled:opacity-60"
            >
              {loading ? "Screening..." : "Run AML Screening"}
            </button>
          </div>

          {result && (
            <div className="mt-8 rounded-3xl border border-emerald-400/30 bg-black/40 p-8">

              <h2
                className={
                  passed
                    ? "text-4xl font-black text-emerald-400"
                    : "text-4xl font-black text-red-400"
                }
              >
                {passed
                  ? "🟢 AML SCREENING PASSED"
                  : "🔴 POTENTIAL MATCH FOUND"}
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Screened Name</p>
                  <p className="mt-2 text-xl font-black text-white">
                    {prompt}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Matches Found</p>
                  <p className="mt-2 text-xl font-black text-emerald-400">
                    {matches}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Compliance Result</p>
                  <p className="mt-2 text-xl font-black text-emerald-400">
                    {passed ? "NO SANCTIONS MATCH FOUND" : "REVIEW REQUIRED"}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#07142b] p-5">
                  <p className="text-slate-400">Audit Reference</p>
                  <p className="mt-2 break-all text-sm font-bold text-emerald-300">
                    {result?.api_usage_id || "N/A"}
                  </p>
                </div>

              </div>

              <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-[#07142b] p-6">
                <h3 className="text-2xl font-black text-white">
                  Watchlist Coverage
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {["OFAC", "United Nations", "European Union", "UK HMT", "DFAT Australia", "SECO Switzerland"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-black/40 p-4 text-emerald-400"
                    >
                      🟢 {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
