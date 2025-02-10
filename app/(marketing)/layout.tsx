"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/marketing/header";
import type { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar className={pathname === "/" ? "hidden" : ""} />
      {children}
    </>
  );
}
