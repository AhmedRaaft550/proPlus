import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function proxy(request: NextRequest) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("sb-mekvaxxeanyhvxexeqxh-auth-token")?.value;
  const isLoginPage = request.nextUrl.pathname === "/";

  console.log("cookiesStore", cookiesStore);

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
