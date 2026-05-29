export default function Navbar() {
  const links = [
    ["Dashboard", "/dashboard"],
    ["Investor", "/investor"],
    ["Treasury", "/treasury"],
    ["Token", "/token"],
    ["Documents", "/documents"],
    ["KYC", "/kyc"],
    ["Monitor", "/monitor"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-white">
          SBUTreasury
        </a>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="/wallet"
          className="rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950"
        >
          Wallet
        </a>
      </div>
    </nav>
  );
}
