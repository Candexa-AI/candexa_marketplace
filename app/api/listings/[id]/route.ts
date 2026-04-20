import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/Listing";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const listing = await Listing.findById(id)
      .select("-email")
      .lean();

    if (!listing) {
      return NextResponse.json(
        { success: false, message: "Listing not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: listing }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/listings/[id]]", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch listing." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const body = await req.json();
    const allowedFields = ["agencyName", "website", "niche", "description"];
    const update: Record<string, string> = {};
    for (const field of allowedFields) {
      if (body[field] !== undefined) update[field] = body[field];
    }

    const listing = await Listing.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true, runValidators: true }
    ).select("-email");

    if (!listing) {
      return NextResponse.json(
        { success: false, message: "Listing not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: listing }, { status: 200 });
  } catch (error) {
    console.error("[PATCH /api/listings/[id]]", error);
    return NextResponse.json(
      { success: false, message: "Update failed." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      return NextResponse.json(
        { success: false, message: "Listing not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Listing deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[DELETE /api/listings/[id]]", error);
    return NextResponse.json(
      { success: false, message: "Delete failed." },
      { status: 500 }
    );
  }
}