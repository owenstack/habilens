"use client";

import { Logo } from "../logo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { User2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "top-0 flex items-center justify-between gap-4 border-primary border-b px-4 py-2",
        className
      )}
    >
      <nav className="items-center gap-2 md:flex">
        <Logo />
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Properties
        </Link>
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Blog
        </Link>
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Landlords
        </Link>
      </nav>
      <div className="hidden items-center gap-2 md:flex">
        <Link
          href={"/"}
          className={cn(buttonVariants({ variant: "ghost" }), "text-primary")}
        >
          <User2 className="mr-1" />
          Log in
        </Link>
        <Link href={"/"} className={buttonVariants()}>
          Submit Listing
          <ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </header>
  );
}
