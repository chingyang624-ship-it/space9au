import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle trailing slashes
  if (request.nextUrl.pathname !== '/' && request.nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname.slice(0, -1), request.url), {
      status: 308,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
