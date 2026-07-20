/* ============================================
   src/proxy.ts
   PROXY - RABIKU.COM
   ============================================ */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Public routes (ga perlu login)
  const publicRoutes = [
    "/",
    "/login",
    "/review",
    "/review/thank-you",
    "/_next",
    "/favicon.ico",
    "/apple-icon.png",
    "/icon0.svg",
    "/icon1.png",
    "/manifest.json",
  ];
  
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith("/_next") || pathname.startsWith("/logo")
  );

  // Kalo udah login dan ke /login → redirect ke dashboard masing-masing
  if (token && pathname === "/login") {
    if (token.role === "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/super-admin", request.url));
    }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Kalo belum login dan mau ke protected route
  if (!token && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Super Admin only
  if (pathname.startsWith("/super-admin") && token?.role !== "SUPER_ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Admin only (customer)
  if (
    pathname.startsWith("/dashboard") &&
    !["ADMIN", "SUPER_ADMIN"].includes(token?.role as string)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};