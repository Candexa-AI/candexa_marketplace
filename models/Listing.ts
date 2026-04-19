import mongoose, { Schema, Document } from 'mongoose';

export interface IListing extends Document {
  name: string;
  email: string;
  agencyName: string;
  website?: string;
  niche?: string;
  location?: string;
  description?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ListingSchema = new Schema<IListing>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    agencyName: { type: String, required: true, trim: true },
    website: { type: String, trim: true },
    niche: { type: String, trim: true },
    location: { type: String, trim: true },
    description: { type: String, trim: true },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Listing || mongoose.model<IListing>('Listing', ListingSchema);