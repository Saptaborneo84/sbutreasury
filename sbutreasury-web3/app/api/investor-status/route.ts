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

  if (!record) {
    return NextResponse.json({
      verified: false,
      status: "no_record"
    });
  }

  return NextResponse.json({
    verified: record.status === "approved",
    status: record.status,
    proof: record.ipfs_url || null
  });
}
