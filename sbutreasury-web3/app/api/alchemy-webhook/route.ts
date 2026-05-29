const CONTRACT_ADDRESS =
  "0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912".toLowerCase();

export async function GET() {
  return Response.json({
    status: "alchemy webhook online",
    contract: CONTRACT_ADDRESS,
  });
}

export async function POST(req: Request) {
  try {
    let body: any = {};

    try {
      body = await req.json();
    } catch {
      body = {};
    }

    console.log("========== ALCHEMY WEBHOOK ==========");
    console.log(JSON.stringify(body, null, 2));

    const activity = body?.event?.activity || [];

    const filtered = activity.filter((tx: any) => {
      return (
        tx.rawContract?.address?.toLowerCase() === CONTRACT_ADDRESS
      );
    });

    console.log("Matched Transfers:", filtered.length);

    return Response.json({
      success: true,
      contract: CONTRACT_ADDRESS,
      matched: filtered.length,
      activity: filtered,
    });
  } catch (err) {
    console.error("Webhook error:", err);

    return Response.json(
      {
        success: false,
        error: "Webhook failed",
      },
      { status: 500 }
    );
  }
}
