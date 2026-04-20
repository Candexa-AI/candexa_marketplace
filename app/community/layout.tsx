import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {children}
    </div>
  );
}