import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "deposits.json"
  );

  fs.writeFileSync(filePath, "[]");

  return NextResponse.json({
    success: true,
    message: "Deposits cleared"
  });
}
