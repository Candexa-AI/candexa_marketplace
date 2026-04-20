import mongoose, { Schema, Document } from "mongoose";

export interface IListing extends Document {
  name: string;
  email: string;
  agencyName: string;
  website?: string;
  niche?: string;
  description?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const listingSchema = new Schema<IListing>({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
    maxlength: [100, "Email cannot exceed 100 characters."],
  },
  agencyName: {
    type: String,
    required: [true, "Agency name is required."],
    trim: true,
    maxlength: [100, "Agency name cannot exceed 100 characters."],
  },
  website: {
    type: String,
    trim: true,
    maxlength: [200, "Website URL cannot exceed 200 characters."],
  },
  niche: {
    type: String,
    trim: true,
    maxlength: [100, "Niche cannot exceed 100 characters."],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Listing = mongoose.model<IListing>("Listing", listingSchema);

export default Listing;