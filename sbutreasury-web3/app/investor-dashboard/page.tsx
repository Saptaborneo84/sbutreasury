export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getDeposits() {
  const res = await fetch(
    "http://localhost:3000/api/deposits",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function InvestorDashboard() {
  const deposits = await getDeposits();

  const total = deposits.reduce(
    (sum: number, d: any) => sum + Number(d.amount || 0),
    0
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: 24,
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: 42, fontWeight: 700 }}>
        Investor Dashboard
      </h1>

      <div
        style={{
          marginTop: 30,
          padding: 24,
          borderRadius: 20,
          background: "#0f172a",
        }}
      >
        <h2 style={{ color: "#94a3b8" }}>
          Total Institutional Settlement
        </h2>

        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#10b981",
          }}
        >
          {total.toLocaleString()} USDC
        </div>

        <p style={{ color: "#94a3b8" }}>
          {deposits.length} Incoming Institutional Transfers
        </p>
      </div>

      <div style={{ marginTop: 30 }}>
        {deposits.map((d: any, i: number) => (
          <div
            key={i}
            style={{
              background: "#111827",
              padding: 20,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <div style={{ color: "#10b981", fontSize: 24 }}>
              {Number(d.amount).toLocaleString()} {d.token}
            </div>

            <div style={{ color: "#94a3b8" }}>
              From: {d.from}
            </div>

            <div style={{ color: "#64748b" }}>
              {d.timestamp}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
