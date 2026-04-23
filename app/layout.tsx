import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plomberie Dupont — Plombier certifié, intervention express",
  description:
    "Plombier professionnel certifié QUALIBAT. Intervention sous 1h, devis gratuit, garantie décennale. Dépannage urgence, installation sanitaire, débouchage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased bg-background text-white font-sans">
        {children}
      </body>
    </html>
  );
}
