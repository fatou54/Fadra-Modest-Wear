import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { rateLimit, getIP } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // Rate limiting: 5 checkout attempts per minute per IP
  const ip = getIP(req);
  const limiter = rateLimit(ip, { interval: 60000, maxRequests: 5 });

  if (!limiter.success) {
    return NextResponse.json(
      { 
        error: 'Too many checkout attempts. Please try again later.',
        retryAfter: limiter.reset 
      },
      { 
        status: 429,
        headers: {
          'Retry-After': limiter.reset.toString(),
          'X-RateLimit-Limit': limiter.limit.toString(),
          'X-RateLimit-Remaining': limiter.remaining.toString(),
          'X-RateLimit-Reset': limiter.reset.toString(),
        }
      }
    );
  }

  try {
    // Initialize Stripe inside the function to ensure env vars are loaded
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-12-15.clover',
    });

    const { items } = await req.json();

    // Create line items for Stripe
    const lineItems = items.map((item: any) => {
      const priceValue = typeof item.price === 'string' 
        ? parseFloat(item.price.replace('RM ', ''))
        : Number(item.price);
      
      return {
        price_data: {
          currency: 'myr',
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: Math.round(priceValue * 100), // Convert to cents
        },
        quantity: item.quantity || 1,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/products`,
      shipping_address_collection: {
        allowed_countries: ['MY'], // Malaysia
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
