import CommunityContent from "@/components/community/CommunityContent";
import { PublicListing } from "@/lib/types";

async function getListings(): Promise<PublicListing[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/listings`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export default async function CommunityPage() {
  const listings = await getListings();

  return (
    <main>
      <CommunityContent listings={listings} />
    </main>
  );
}