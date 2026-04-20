# Candexa AI Marketplace

A modern community-driven platform for talent sourcing and agency discovery. Connect with top creative agencies, find specialized talent, and grow your network in one centralized marketplace.

## Overview

Candexa Marketplace enables agencies to list their services, showcase their expertise, and connect with potential clients. Built with modern web technologies, it provides a seamless experience for discovering and collaborating with vetted agencies across various niches.

## Features

- 🏢 **Agency Listings** - Create and manage agency profiles with detailed information
- 🔍 **Smart Discovery** - Find agencies by niche, location, and specialization
- ✅ **Verification System** - Vetted agency listings for trusted partnerships
- 📱 **Responsive Design** - Beautiful, mobile-first user interface
- 🚀 **Real-time Updates** - Instant listing submissions and updates
- 🌍 **Global Reach** - Connect with agencies worldwide

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16.2.4, React 19.2.4, TypeScript 5, Tailwind CSS 4 |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | MongoDB with Mongoose 9.4.1 |
| **Development** | ESLint 9, TypeScript, PostCSS |

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **MongoDB** account (local instance or MongoDB Atlas cloud)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd candexa_marketplace
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/candexa_marketplace?retryWrites=true&w=majority
```

**Environment Variables Guide:**

| Variable | Description | Example |
|----------|-----------|---------|
| `MONGODB_URI` | MongoDB connection string for listings database | `mongodb://localhost:27017/candexa_marketplace` |

## Project Structure

```
candexa_marketplace/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── listings/            # API routes for listing operations
│   │       └── route.ts         # GET/POST endpoints
│   ├── community/               # Community marketplace pages
│   │   ├── page.tsx             # Community listings hub
│   │   └── submit/              # Agency listing submission
│   │       └── page.tsx         # Submission form
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home/landing page
│   └── globals.css              # Global styles
├── lib/                          # Utility functions
│   └── db.ts                    # Database connection logic
├── models/                       # MongoDB schemas
│   └── Listing.ts               # Agency listing model
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── postcss.config.mjs            # PostCSS configuration
```

## Database Schema

### Listing Model

The `Listing` model represents an agency profile in the marketplace:

```typescript
{
  name: string              // Contact person's name (required)
  email: string             // Contact email (required)
  agencyName: string        // Agency/company name (required)
  website?: string          // Agency website URL
  niche?: string            // Primary service niche (e.g., "Web Design", "Branding")
  location?: string         // Geographic location
  description?: string      // Agency description and services
  isVerified: boolean       // Verification status (default: false)
  createdAt: Date          // Auto-generated creation timestamp
  updatedAt: Date          // Auto-generated update timestamp
}
```

## API Endpoints

### Get All Listings

```bash
GET /api/listings
```

Fetches all verified agency listings with pagination support.

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Smith",
    "email": "john@example.com",
    "agencyName": "Creative Studios",
    "website": "https://creativestudios.com",
    "niche": "Web Design",
    "location": "San Francisco, CA",
    "description": "Full-service web design and development agency",
    "isVerified": true,
    "createdAt": "2024-04-20T10:30:00.000Z",
    "updatedAt": "2024-04-20T10:30:00.000Z"
  }
]
```

### Submit a New Listing

```bash
POST /api/listings
Content-Type: application/json
```

Submits a new agency listing (unverified by default).

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@agency.com",
  "agencyName": "Digital Innovations",
  "website": "https://digitalinnovations.com",
  "niche": "Digital Marketing",
  "location": "New York, NY",
  "description": "Full-service digital marketing and SEO agency"
}
```

**Response:**
```json
{
  "_id": "507f191e810c19729de860ea",
  "name": "Jane Doe",
  "email": "jane@agency.com",
  "agencyName": "Digital Innovations",
  "website": "https://digitalinnovations.com",
  "niche": "Digital Marketing",
  "location": "New York, NY",
  "description": "Full-service digital marketing and SEO agency",
  "isVerified": false,
  "createdAt": "2024-04-20T11:45:00.000Z",
  "updatedAt": "2024-04-20T11:45:00.000Z"
}
```

## Running Locally

### Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

**Hot Reload:** Changes to files are automatically reflected in the browser as you edit.

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com), created by the Next.js team:

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import the project into Vercel
3. Add environment variables (MONGODB_URI) in Vercel dashboard
4. Deploy with a single click

[Deploy with Vercel](https://vercel.com/new)

### Deploy to Other Platforms

- **Docker:** Create a Dockerfile for containerized deployment
- **Self-hosted:** Run the production build on your own server
- **Other providers:** Refer to [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Development Workflow

### Code Style

This project uses ESLint for code quality:

```bash
npm run lint
```

### TypeScript

TypeScript is configured with strict mode enabled for type safety.

## Troubleshooting

### MongoDB Connection Issues

**Error:** `Failed to connect to MongoDB`

**Solution:**
- Verify `MONGODB_URI` is correct in `.env.local`
- Ensure MongoDB service is running (if using local instance)
- Check network access if using MongoDB Atlas (whitelist your IP)
- Confirm database user has appropriate permissions

### Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solution:**
- Kill the process using port 3000: `lsof -ti:3000 | xargs kill -9`
- Or specify a different port: `PORT=3001 npm run dev`

### Module Not Found

**Error:** `Cannot find module '@/...'`

**Solution:**
- Ensure all dependencies are installed: `npm install`
- Check that `tsconfig.json` path aliases are configured correctly
- Clear Next.js cache: `rm -rf .next`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request with a clear description

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues, please:

- Check the [Troubleshooting](#troubleshooting) section
- Open an issue on GitHub
- Contact the development team

---

**Built with ❤️ for the Candexa AI community**
