import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MetaNode dao",
  description: "meta node dao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col h-full min-h-screen text-[14px] relative <lg:pt-16">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
