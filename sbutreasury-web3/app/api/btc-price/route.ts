import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd",
      { cache: "no-store" }
    );

    const data = await res.json();

    return NextResponse.json({
      btcUsd: data.bitcoin.usd,
      ethUsd: data.ethereum.usd,
      source: "CoinGecko",
      status: "LIVE",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: "Unable to fetch live BTC/ETH price",
      },
      { status: 500 }
    );
  }
}
