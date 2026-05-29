import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const dbFile = path.join(process.cwd(), "data", "investor-proofs.json");

function readDb() {
  if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, "{}");
  return JSON.parse(fs.readFileSync(dbFile, "utf8"));
}

function writeDb(db: any) {
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

export async function GET() {
  return NextResponse.json(readDb());
}

export async function POST(req: Request) {
  const body = await req.json();
  const wallet = String(body.wallet_address || "").toLowerCase();
  const action = body.action;

  const db = readDb();

  if (!wallet || !db[wallet]) {
    return NextResponse.json(
      { success: false, error: "Record not found" },
      { status: 404 }
    );
  }

  db[wallet].status =
    action === "approve"
      ? "approved"
      : action === "reject"
      ? "rejected"
      : "pending_review";

  db[wallet].updated_at = new Date().toISOString();

  writeDb(db);

  return NextResponse.json({
    success: true,
    record: db[wallet],
  });
}
