import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getIP } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // Rate limiting: 3 contact form submissions per 10 minutes per IP
  const ip = getIP(req);
  const limiter = rateLimit(ip + ':contact', { interval: 600000, maxRequests: 3 });

  if (!limiter.success) {
    return NextResponse.json(
      { 
        error: 'Too many contact form submissions. Please try again later.',
        retryAfter: limiter.reset 
      },
      { status: 429 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // For now, log to console (you can integrate SendGrid, Resend, or other email service later)
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ip,
    });

    // TODO: Send email using email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@fadra-modest-store.vercel.app',
    //   to: 'fadra.wear@gmail.com',
    //   subject: `Contact Form: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // If you have email service configured, send the email here
    // For now, we'll return success
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    );
  }
}
