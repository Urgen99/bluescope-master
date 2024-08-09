import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// this function can be marked 'async' if using 'await' inside
export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/admin/login" ||
    path === "/" ||
    path === "/about-us" ||
    path === "verticals" ||
    path === "gallery" ||
    path === "contact-us" ||
    path === "member";

  const token = req.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/admin/reviews", req.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/admin/gallery",
    "/admin/gallery/add",
    "/admin/members",
    "/admin/messages",
    "/admin/reviews",
    "/admin/reviews/add",
    "/admin/users",
    "/admin/users/add",
  ],
};
