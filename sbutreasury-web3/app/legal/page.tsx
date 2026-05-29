import Link from "next/link";

const sections = [
  {
    title: "1. Company Overview",
    rows: [
      ["Company Name", "PT Sapta Borneo Utama"],
      ["Company Registration Number (NIB)", "9120104820656"],
      ["Legal Form", "Perseroan Terbatas (PT)"],
      ["Country of Incorporation", "Republic of Indonesia"],
      ["Registered Address", "Jl. Sultan Alauddin RT.01 No.11, Kelurahan Mekarsari, Balikpapan 76122, Indonesia"],
      ["Business Sector", "Integrated Agro-Industrial & Renewable Energy"],
    ],
  },
  {
    title: "2. Business Owner Details",
    rows: [
      ["Full Name", "Sapta Riswandy"],
      ["Position", "President Director"],
      ["Nationality", "Indonesian"],
      ["Passport Number", "X1410885"],
      ["Passport Issue Date", "02 May 2023"],
    ],
  },
  {
    title: "3. Shareholding Structure",
    rows: [
      ["Sapta Riswandy", "President Director — 85%"],
      ["David Lokatili", "Commissioner — 10%"],
      ["Neneng Siti Maryam", "Commissioner — 5%"],
    ],
  },
  {
    title: "4. Project Profile",
    rows: [
      ["Project", "Integrated Sugar Factory & Biomass Power Plant"],
      ["Location", "Majalengka, West Java – Indonesia"],
      ["Sugar Mill", "10,000 TCD"],
      ["Biomass Power Plant", "30 MW"],
      ["Plantation Area", "±500 Ha"],
      ["Industrial Area", "±45 Ha"],
      ["Total Investment", "USD 1,000,000,000"],
    ],
  },
  {
    title: "5. Financial Highlights",
    rows: [
      ["IRR", "~11.8%"],
      ["DSCR", "≥1.30x"],
      ["LLCR", "~1.45x"],
      ["PLCR", "~1.60x"],
      ["EBITDA", "~USD 109 Million"],
      ["Revenue", "~USD 198 Million/year"],
    ],
  },
  {
    title: "6. Funding Structure",
    rows: [
      ["Facility Type", "Senior Secured Project Finance"],
      ["Facility Size", "Up to USD 1 Billion"],
      ["Tenor", "Up to 20 Years"],
      ["Interest Rate", "~3.00% p.a."],
    ],
  },
  {
    title: "7. Regulatory Status",
    rows: [
      ["NIB", "Completed"],
      ["PKKPR / PPKR", "Completed"],
      ["AMDAL", "In Process"],
      ["Land Acquisition", "Ongoing"],
    ],
  },
  {
    title: "8. Contact Information",
    rows: [
      ["Company", "PT Sapta Borneo Utama"],
      ["Email", "info@saptaborneo.com"],
      ["Website", "https://saptaborneo.com"],
      ["Office Address", "Majalengka, West Java – Indonesia"],
    ],
  },
];

export default function LegalPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020817] via-[#071a44] to-black px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-[2rem] border border-emerald-400/20 bg-[#07142b]/95 p-6 shadow-[0_0_45px_rgba(16,185,129,0.18)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
            Legal & Corporate Information
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
            PT Sapta Borneo Utama
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-300 sm:text-2xl">
            Corporate legal profile, ownership structure, project profile,
            funding structure, and regulatory status for institutional review.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/documents"
              className="rounded-2xl bg-emerald-400 px-6 py-3 text-base font-black text-black shadow-[0_0_30px_rgba(16,185,129,0.55)] sm:text-lg"
            >
              View Document Vault →
            </Link>

            <a
              href="https://saptaborneo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-emerald-400/30 bg-black/30 px-6 py-3 text-base font-black text-emerald-300 sm:text-lg"
            >
              Corporate Website ↗
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.75rem] border border-blue-500/20 bg-[#07142b]/90 p-5 shadow-[0_0_35px_rgba(30,64,175,0.18)] sm:p-8"
            >
              <h2 className="text-2xl font-black text-emerald-400 sm:text-3xl">
                {section.title}
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700/80">
                {section.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 border-b border-slate-700/70 bg-black/25 p-4 last:border-b-0 sm:grid-cols-[280px_1fr] sm:p-5"
                  >
                    <div className="font-black text-slate-200">
                      {label}
                    </div>

                    <div className="break-words text-slate-300">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-amber-400/30 bg-amber-400/10 p-6 text-amber-100 sm:p-8">
          <h2 className="text-2xl font-black">
            Disclaimer
          </h2>

          <p className="mt-4 leading-relaxed">
            This Legal & Corporate Information Statement is provided for
            informational purposes only and does not constitute an offer,
            solicitation, commitment, or guarantee of financing. All project
            information, financial metrics, and development status remain subject
            to verification, due diligence, regulatory approvals, and lender review.
          </p>
        </div>

      </div>
    </section>
  );
}
