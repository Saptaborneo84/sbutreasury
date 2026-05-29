import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch(
      "https://api.amlscreen.io/api/v2/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.AMLSCREEN_API_KEY || "",
        },
        body: JSON.stringify({
          prompt,
          search_type: "standard_match",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "AML request failed",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
