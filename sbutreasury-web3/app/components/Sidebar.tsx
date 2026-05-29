export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-950 p-6 md:block">
      <div className="text-2xl font-bold text-white">
        SBUTreasury
      </div>

      <div className="mt-10 flex flex-col gap-4 text-sm text-slate-300">
        <a href="/dashboard" className="hover:text-emerald-400">
          Dashboard
        </a>

        <a href="/treasury" className="hover:text-emerald-400">
          Treasury
        </a>

        <a href="/token" className="hover:text-emerald-400">
          Token Analytics
        </a>

        <a href="/kyc" className="hover:text-emerald-400">
          KYC
        </a>

        <a href="/admin" className="hover:text-emerald-400">
          Admin
        </a>
      </div>
    </aside>
  );
}
