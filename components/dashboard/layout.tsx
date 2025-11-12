"use client";

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { DashboardHeader } from "./header";
import { mockUsers } from "@/lib/mock-api";
import { useRouter, usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const getMockUser = () => {
    if (pathname.startsWith("/admin")) return mockUsers[0];
    if (pathname.startsWith("/league-manager")) return mockUsers[1];
    if (pathname.startsWith("/club-manager")) return mockUsers[2];
    return mockUsers[0];
  };

  const user = getMockUser();

  const handleSignOut = async () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-neutral-950">
      <div className="w-64 flex-shrink-0">
        <Sidebar role={user.role} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader user={user} onSignOut={handleSignOut} />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
