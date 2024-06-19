import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { createClient } from "@/lib/supabase/server";

export async function middleware(request: NextRequest) {
  await updateSession(request);

  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const isNotLoggedIn = !session.data.session;

  if (request.nextUrl.pathname.endsWith("/my") && isNotLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};