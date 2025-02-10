import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MapPinned } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex items-center gap-2 self-center font-medium",
        className
      )}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <MapPinned className="size-4" />
      </div>
      <span className="text-primary">Habilens</span>
    </Link>
  );
}
