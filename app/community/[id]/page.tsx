import { notFound } from "next/navigation";
import ListingDetailContent from "@/components/community/ListingDetailContent";
import { PublicListing } from "@/lib/types";

async function getListing(id: string): Promise<PublicListing | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/listings/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = await getListing(id);

  if (!listing) notFound();

  return <ListingDetailContent listing={listing} />;
}