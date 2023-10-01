import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="fr">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={"m-8"}>
        <MantineProvider>
          {
            <>
              <header className="mb-32">
                <h1 className="text-center text-7xl my-10">
                  <Link href={"/"}>Digital Oasis</Link>
                </h1>
                <h2 className="text-center text-2xl">
                  {"Votre bureau, c'est l'Europe"}
                </h2>
              </header>
              {children}
            </>
          }
        </MantineProvider>
      </body>
    </html>
  );
}
