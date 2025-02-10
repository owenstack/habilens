import HabilensBg from "@/assets/images/habilens_background.jpg";
import { Navbar } from "@/components/marketing/header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main>
      <section
        className="bg-center bg-cover md:h-screen"
        style={{ backgroundImage: `url(${HabilensBg.src})` }}
      >
        <Navbar />
        <div className="flex h-[90%] w-full flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center gap-2 place-self-start px-9">
            <h2 className="font-semibold text-6xl text-primary">
              Stay organized. Stay in control.
            </h2>
            <p className="text-2xl text-secondary">
              Buy and sell property with Habilens
            </p>
            <div className="flex flex-row items-center gap-2">
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "border text-primary-foreground"
                )}
              >
                Get started
              </Link>
              <Link href={"/"} className={buttonVariants()}>
                Submit Listing
                <ArrowUpRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
