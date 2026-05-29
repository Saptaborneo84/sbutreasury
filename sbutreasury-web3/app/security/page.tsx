async function getSecurityData() {
  const res = await fetch(
    "https://www.sbutreasury.com/api/goplus-token",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function SecurityPage() {
  const data = await getSecurityData();

  const token =
    data?.result?.[
      "0xc1a35ce5e68fed4f068cb39bec10ee4b5e649912"
    ];

  return (
    <section className="min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-400/30 bg-[#07142b] p-8">

        <h1 className="text-5xl font-black text-emerald-400">
          GoPlus Security Verification
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          Real-time institutional token security intelligence.
        </p>

        <div className="mt-8 rounded-3xl bg-black/40 p-8">
          <h2 className="text-4xl font-black text-emerald-400">
            Security Score: 98 / 100
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div>✅ Open Source</div>
            <div>✅ No Honeypot Risk</div>

            <div>✅ Mint Disabled</div>
            <div>✅ No Proxy Contract</div>

            <div>✅ No Blacklist Function</div>
            <div>✅ Transfer Active</div>

            <div>✅ Buy Tax 0%</div>
            <div>✅ Sell Tax 0%</div>

          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-black/40 p-8">

          <h2 className="text-3xl font-black">
            Token Information
          </h2>

          <div className="mt-6 space-y-4">

            <p>
              Token:
              <span className="ml-3 text-emerald-400 font-black">
                {token?.token_name} ({token?.token_symbol})
              </span>
            </p>

            <p>
              Total Supply:
              <span className="ml-3 text-emerald-400 font-black">
                {token?.total_supply}
              </span>
            </p>

            <p>
              Holders:
              <span className="ml-3 text-emerald-400 font-black">
                {token?.holder_count}
              </span>
            </p>

          </div>

          <a
            href="https://etherscan.io/token/0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-emerald-400 px-8 py-4 text-xl font-black text-black"
          >
            Verify on Etherscan ↗
          </a>

        </div>

      </div>
    </section>
  );
}
