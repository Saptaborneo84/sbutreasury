import { NextResponse } from "next/server";
import { ethers } from "ethers";

const wallet =
  process.env.TREASURY_WALLET ||
  "0xf6E7C9d6E8F73F32cB26B4f5a598a56C954c2286";

const provider = new ethers.JsonRpcProvider(
  process.env.ALCHEMY_ETH_RPC
);

export async function GET() {
  try {
    const balance = await provider.getBalance(wallet);

    return NextResponse.json({
      wallet,
      eth: ethers.formatEther(balance),
      network: "Ethereum Mainnet",
      status: "LIVE",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
