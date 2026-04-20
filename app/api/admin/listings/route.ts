import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/Listing";

function isAuthorized(req: NextRequest): boolean {
  const token = req.headers.get("x-admin-token");
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return token === secret;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const listings = await Listing.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: listings }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/admin/listings]", error);
    return NextResponse.json({ success: false, message: "Failed." }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const { id, isVerified } = await req.json();

    if (!id || typeof isVerified !== "boolean") {
      return NextResponse.json(
        { success: false, message: "id and isVerified (boolean) are required." },
        { status: 400 }
      );
    }

    const listing = await Listing.findByIdAndUpdate(
      id,
      { $set: { isVerified } },
      { new: true }
    );

    if (!listing) {
      return NextResponse.json({ success: false, message: "Not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: listing }, { status: 200 });
  } catch (error) {
    console.error("[PATCH /api/admin/listings]", error);
    return NextResponse.json({ success: false, message: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "id is required." }, { status: 400 });
    }

    await Listing.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Deleted." }, { status: 200 });
  } catch (error) {
    console.error("[DELETE /api/admin/listings]", error);
    return NextResponse.json({ success: false, message: "Delete failed." }, { status: 500 });
  }
}