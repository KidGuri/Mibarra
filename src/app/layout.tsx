import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mibarra | Restaurante Mediterráneo en Santa Pola",
  description:
    "Cocina mediterránea junto al puerto de Santa Pola. Arroces, pescados frescos, mariscos y carnes a la brasa. Terraza con vistas al mar.",
  keywords: "mibarra, restaurante, santa pola, mediterráneo, arroces, paella, mariscos, terraza",
  openGraph: {
    title: "Mibarra | Restaurante Mediterráneo en Santa Pola",
    description: "Cocina mediterránea junto al puerto de Santa Pola",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
