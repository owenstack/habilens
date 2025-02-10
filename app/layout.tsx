import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";
import { Provider } from "@/components/providers";
import "./globals.css";

const inter = localFont({
  src: "../assets/fonts/inter.ttf",
});
export const metadata: Metadata = {
  title: "Habilens",
  description: "One stop solution for real estate in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
