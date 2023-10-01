import "./globals.css";
import type { Metadata } from "next";
import { Abel, Inter } from "next/font/google";
import Link from "next/link";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Oasis",
  description: "Votre bureau, c'est l'Europe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className={"container px-4 mx-auto"}>
        <>
          <header className="pb-32">
            <h1 className="text-center text-7xl my-10">
              <Link href={"/"}>Digital Oasis</Link>
            </h1>
            <h2 className="text-center text-2xl">
              {"Votre bureau, c'est l'Europe"}
            </h2>
          </header>
          {children}
        </>
      </body>
    </html>
  );
}
