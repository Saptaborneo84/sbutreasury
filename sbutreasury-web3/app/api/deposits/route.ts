
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "deposits.json");

function readDeposits() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeDeposits(data: any[]) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readDeposits());
}

export async function POST(req: Request) {
  const body = await req.json();
  const deposits = readDeposits();

  deposits.unshift({
    txHash: body.txHash || "0x" + Date.now().toString(16),
    from: body.from,
    amount: Number(body.amount || 0),
    token: body.token || "USDC",
    timestamp: new Date().toISOString(),
  });

  writeDeposits(deposits);

  return NextResponse.json({ success: true, deposits });
}
