import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbFile = path.join(
  process.cwd(),
  "data",
  "investor-proofs.json"
);

export async function POST(req: Request) {
  const body = await req.json();
  const wallet = String(
    body.wallet_address || ""
  ).toLowerCase();

  const db = JSON.parse(
    fs.readFileSync(dbFile, "utf8")
  );

  const record = db[wallet];

  if (!record || record.status !== "approved") {
    return NextResponse.json({
      verified: false,
      badge: "UNVERIFIED INVESTOR"
    });
  }

  return NextResponse.json({
    verified: true,
    badge: "VERIFIED SBU INVESTOR",
    access: {
      wechat: true,
      payout: true
    }
  });
}
