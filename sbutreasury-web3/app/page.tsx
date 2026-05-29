import InvestorPortalButton from "./components/InvestorPortalButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="text-6xl font-black text-emerald-400 md:text-8xl">
          SBUTreasury
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-3xl">
          Institutional digital asset infrastructure platform backed by
          agribusiness, renewable energy, and blockchain treasury systems.
        </p>

        <div className="mt-14 space-y-6">

          <Link href="/documents" className="flex items-center justify-between rounded-3xl bg-emerald-400 px-8 py-8 text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]">
            <span className="text-5xl">📄</span>
            <span className="text-3xl font-black">Offering Documents</span>
            <span className="text-5xl font-black">›</span>
          </Link>

          <Link href="/aml-screening" className="flex items-center justify-between rounded-3xl bg-emerald-400 px-8 py-8 text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]">
            <span className="text-5xl">🛡️</span>
            <span className="text-3xl font-black">AML Screening</span>
            <span className="text-5xl font-black">›</span>
          </Link>

          <Link href="/monitor" className="flex items-center justify-between rounded-3xl bg-emerald-400 px-8 py-8 text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]">
            <span className="text-5xl">📊</span>
            <span className="text-3xl font-black">Monitor Dashboard</span>
            <span className="text-5xl font-black">›</span>
          </Link>

          <InvestorPortalButton />

        </div>
      </div>
    </section>
  );
}
