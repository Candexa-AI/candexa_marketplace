import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Listing from '@/models/Listing';

export async function GET() {
  try {
    await connectDB();
    const listings = await Listing.find({})
      .sort({ createdAt: -1 })
      .select('-email')
      .lean();

    return NextResponse.json(listings);
  } catch (error) {
    console.error('Fetch listings error:', error);
    return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!body.name?.trim() || !body.email?.trim() || !body.agencyName?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and agency name are required' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const listing = await Listing.create({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      agencyName: body.agencyName.trim(),
      website: body.website?.trim() || undefined,
      niche: body.niche?.trim() || undefined,
      location: body.location?.trim() || undefined,
      description: body.description?.trim() || undefined,
      isVerified: false,
    });

    return NextResponse.json({
      success: true,
      message: 'Profile submitted successfully! It is now live as Unverified.',
      listing,
    }, { status: 201 });
  } catch (error: unknown) {
    console.error('Submit listing error:', error);
    const message = error instanceof Error ? error.message : 'Failed to submit profile';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}