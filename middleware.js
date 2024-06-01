import { NextResponse } from "next/server";
import { getCookie } from "@/utils/cookies";

// This function can be marked `async` if using `await` inside (recommended)
export async function middleware(request) {
  const token = getCookie("token");

  // Private routes: /profile, /add-recipe
  if (
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/add-recipe")
  ) {
    if (!token) {
      // Redirect to login with a clear message (optional)
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Public route: /login
  if (request.nextUrl.pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next(); // Pass through for other routes
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:slug*", "/login", "/add-recipe"],
};
