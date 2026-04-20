import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/Listing";

export async function GET() {
  try {
    await connectToDatabase();

    const listings = await Listing.find({})
      .select("-email")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: listings }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/listings]", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch listings." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { name, email, agencyName, website, niche, description } = body;

    if (!name || !email || !agencyName) {
      return NextResponse.json(
        { success: false, message: "Name, email, and agency name are required." },
        { status: 400 }
      );
    }

    const listing = await Listing.create({
      name,
      email,
      agencyName,
      website,
      niche,
      description,
    });

    return NextResponse.json(
      { success: true, data: listing },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Email already registered." },
        { status: 409 }
      );
    }
    console.error("[POST /api/listings]", error);
    return NextResponse.json(
      { success: false, message: "Failed to create listing." },
      { status: 500 }
    );
  }
}