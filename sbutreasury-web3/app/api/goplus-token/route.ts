import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=0xc1a35CE5e68fed4F068cb39bEC10eE4B5E649912",
      {
        headers: {
          "x-api-key": process.env.GOPLUS_API_KEY || "",
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "GoPlus API request failed" },
      { status: 500 }
    );
  }
}
