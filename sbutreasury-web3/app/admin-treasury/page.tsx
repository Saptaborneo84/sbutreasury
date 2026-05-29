export default async function AdminTreasuryPage() {
  const res = await fetch("https://sbutreasury.com/api/deposits", {
    cache: "no-store",
  });

  const deposits = await res.json();

  const totalUSDC = deposits
    .filter((d: any) => d.asset === "USDC")
    .reduce((sum: number, d: any) => sum + Number(d.amount || 0), 0);

  return (
    <main style={{ padding: 40 }}>
      <h1>SBUTreasury Admin Treasury</h1>

      <h2>Total USDC Deposits</h2>
      <p style={{ fontSize: 32, fontWeight: "bold" }}>
        {totalUSDC.toLocaleString()} USDC
      </p>

      <h2>Recent Deposits</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(deposits, null, 2)}
      </pre>
    </main>
  );
}
