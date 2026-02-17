import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit } from './lib/rateLimit';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip rate limiting for static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Apply stricter rate limits to API routes
  if (pathname.startsWith('/api/')) {
    const result = await checkRateLimit(request, { 
      interval: 60000, // 1 minute
      maxRequests: 30  // 30 requests per minute for API routes
    });

    if (!result.success) {
      return result.response!;
    }
  } 
  // Apply general rate limits to all other pages
  else {
    const result = await checkRateLimit(request, { 
      interval: 60000,  // 1 minute
      maxRequests: 100  // 100 requests per minute for regular pages
    });

    if (!result.success) {
      return result.response!;
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
