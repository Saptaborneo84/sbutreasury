const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const address = body.address;

    if (!address) {
      return Response.json(
        { error: "Address required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBalance",
          params: [address, "latest"],
          id: 1,
        }),
      }
    );

    const data = await response.json();

    const wei = parseInt(data.result, 16);
    const eth = wei / 1e18;

    return Response.json({
      success: true,
      address,
      balance: eth,
      symbol: "ETH",
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        success: false,
        error: "Failed",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    status: "wallet balance api online",
  });
}
