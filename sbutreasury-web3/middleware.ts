import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === "/wallet") {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/wallet", "/investor"],
};
