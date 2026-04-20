export interface PublicListing {
  _id: string;
  name: string;
  agencyName: string;
  website?: string;
  niche?: string;
  description?: string;
  isVerified: boolean;
  createdAt: string;
}