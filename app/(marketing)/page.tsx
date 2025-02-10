import bg from "@/assets/images/habilens_background.jpg";
import first from "@/assets/images/habilens_first.jpg";
import second from "@/assets/images/habilens_third.jpg";
import { Navbar } from "@/components/marketing/header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContent: { q: string; a: string }[] = [
  {
    q: "How do I list my property?",
    a: "Simply upload your property details, set your price and relax.",
  },
  {
    q: "How do I collect and make payments?",
    a: "All payments are customizable, automated and secure.",
  },
  {
    q: "Can I get a job?",
    a: "Service providers, once registered and vetted, can list their services.",
  },
  {
    q: "How do I rest a property?",
    a: "Sign up, search, select and book a tour with our agents.",
  },
  {
    q: "How do I know legitimate listings?",
    a: "All listings, landlords and users are vetted to ensure safe and reliable use of the app.",
  },
  {
    q: "The app is free?  What is the catch?",
    a: "There's none. Revenue is earned from premium listings, and a flat 5% commission rate.",
  },
];

export default function Page() {
  return (
    <main>
      <section
        className="h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${bg.src})` }}
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
      <section className="mt-4 flex flex-col items-center justify-center gap-4 bg-background/50 p-4">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image
            src={first.src}
            alt={"image"}
            width={400}
            height={400}
            className="rounded-2xl"
          />
          <div className="flex flex-col items-start justify-center gap-4 p-4">
            <h3 className="mb-4 font-semibold text-3xl text-primary">
              Seamless
            </h3>
            <p className="font-semibold text-secondary">
              Find, tour and move into your dream home with ease.
            </p>
            <Link
              href={"/blog"}
              className={buttonVariants({ variant: "secondary" })}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
          <Image
            src={second.src}
            alt={"image"}
            width={400}
            height={400}
            className="aspect-square rounded-2xl"
          />
          <div className="flex flex-col items-start justify-center gap-4 p-4">
            <h3 className="mb-4 font-semibold text-3xl text-primary">
              Reliable
            </h3>
            <p className="font-semibold text-secondary">
              Need repairs or maintenance? Connect with trusted professionals
              instantly.
            </p>
            <Link
              href={"/blog"}
              className={buttonVariants({ variant: "secondary" })}
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-6 grid w-full gap-4 p-4">
        <h3 className="text-center font-semibold text-3xl text-primary">FAQ</h3>
        <div className="mx-auto w-[60%]">
          <Accordion
            type="single"
            collapsible
            className="w-full place-content-center"
          >
            {accordionContent.map(({ a, q }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8">
        <h3 className="my-4 font-semibold text-3xl text-primary">
          Sign up today.
        </h3>
        <Link href={"/"} className={buttonVariants()}>
          Sign up today
        </Link>
      </section>
    </main>
  );
}
