import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pitada",
    template: "%s | Pitada",
  },
  description:
    "Descubra receitas incríveis com os ingredientes que você já tem em casa. Use inteligência artificial para criar receitas personalizadas e deliciosas.",
  keywords: [
    "receitas",
    "culinária",
    "inteligência artificial",
    "ingredientes",
    "cozinha",
    "IA",
    "receitas personalizadas",
    "comida",
    "gastronomia",
  ],
  authors: [
    {
      name: "Diego Carmona",
    },
  ],
  creator: "Diego Carmona",
  publisher: "Diego Carmona",
  metadataBase: new URL("https://pitada.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pitada - Receitas com IA",
    description:
      "Descubra receitas incríveis com os ingredientes que você já tem em casa.",
    url: "https://pitada.vercel.app",
    siteName: "Pitada",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Pitada - Aplicativo de receitas com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitada - Receitas com IA",
    description:
      "Descubra receitas incríveis com os ingredientes que você já tem em casa.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/icons/favicon.ico",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lora.variable} antialiased bg-bg`} data-theme="light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
