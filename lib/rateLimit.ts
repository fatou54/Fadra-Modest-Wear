import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store for rate limiting (works for serverless)
const rateLimitStore: RateLimitStore = {};

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  Object.keys(rateLimitStore).forEach((key) => {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  });
}, 60 * 60 * 1000);

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests allowed in the interval
}

/**
 * Rate limiter for API routes and pages
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns Object with success status and remaining info
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { interval: 60000, maxRequests: 10 }
): {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
} {
  const now = Date.now();
  const key = identifier;

  // Initialize or get existing rate limit data
  if (!rateLimitStore[key] || rateLimitStore[key].resetTime < now) {
    rateLimitStore[key] = {
      count: 0,
      resetTime: now + config.interval,
    };
  }

  const data = rateLimitStore[key];

  // Increment request count
  data.count++;

  const remaining = Math.max(0, config.maxRequests - data.count);
  const reset = Math.ceil((data.resetTime - now) / 1000); // Time in seconds

  return {
    success: data.count <= config.maxRequests,
    limit: config.maxRequests,
    remaining,
    reset,
  };
}

/**
 * Get IP address from request
 */
export function getIP(req: NextRequest): string {
  // Try to get real IP from headers (Vercel, Cloudflare, etc.)
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback to a generic identifier
  return 'unknown';
}

/**
 * Middleware helper for rate limiting
 */
export async function checkRateLimit(
  req: NextRequest,
  config: RateLimitConfig = { interval: 60000, maxRequests: 60 }
): Promise<{
  success: boolean;
  response?: Response;
}> {
  const ip = getIP(req);
  const limiter = rateLimit(ip, config);

  if (!limiter.success) {
    return {
      success: false,
      response: new Response(
        JSON.stringify({
          error: 'Too many requests. Please try again later.',
          retryAfter: limiter.reset,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': limiter.reset.toString(),
            'X-RateLimit-Limit': limiter.limit.toString(),
            'X-RateLimit-Remaining': limiter.remaining.toString(),
            'X-RateLimit-Reset': limiter.reset.toString(),
          },
        }
      ),
    };
  }

  return { success: true };
}

export default rateLimit;
