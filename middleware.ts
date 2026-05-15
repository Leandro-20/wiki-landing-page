import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ENABLE_RATE_LIMIT = process.env.ENABLE_RATE_LIMIT === "true";

const RATE_LIMIT_NOTE = `
NOTE: This in-memory rate limiting works only in non-serverless environments.
In Vercel (serverless), use a shared store like Vercel KV or Upstash Redis.
Set ENABLE_RATE_LIMIT=true to enable this middleware (default: disabled).
`;

const rateLimit = new Map<string, { count: number; timestamp: number }>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 10;

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
    || request.headers.get("x-real-ip") 
    || "unknown";
}

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/chat")) {
    return NextResponse.next();
  }

  if (!ENABLE_RATE_LIMIT) {
    return NextResponse.next();
  }

  const ip = getClientIp(request);
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.timestamp > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return NextResponse.next();
  }

  if (record.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta más tarde." },
      { status: 429 }
    );
  }

  record.count++;
  return NextResponse.next();
}

export const config = {
  matcher: "/api/chat/:path*",
};