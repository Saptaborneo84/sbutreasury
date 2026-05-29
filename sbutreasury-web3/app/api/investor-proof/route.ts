import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const dbFile = path.join(process.cwd(), "data", "investor-proofs.json");

function readDb() {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, "{}");
  }
  return JSON.parse(fs.readFileSync(dbFile, "utf8"));
}

function writeDb(db: any) {
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

export async function POST(req: Request) {
  const body = await req.json();
  const wallet = String(body.wallet_address || "").toLowerCase();

  if (!wallet) {
    return NextResponse.json(
      { success: false, error: "wallet_address required" },
      { status: 400 }
    );
  }

  const db = readDb();

  if (db[wallet]) {
    return NextResponse.json({
      success: false,
      message: "Proof already submitted",
      record: db[wallet],
    });
  }

  db[wallet] = {
    wallet_address: wallet,
    tx_hash: body.tx_hash || "",
    trn: body.trn || "",
    uetr: body.uetr || "",
    ipfs_url: body.ipfs_url || "",
    status: "pending_review",
    created_at: new Date().toISOString(),
  };

  writeDb(db);

  return NextResponse.json({
    success: true,
    message: "Proof saved successfully",
    record: db[wallet],
  });
}

export async function GET() {
  return NextResponse.json(readDb());
}
