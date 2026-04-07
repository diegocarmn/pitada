import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pitada.vercel.app"),
  title: {
    default: "Pitada | Receitas com IA",
    template: "%s | Pitada",
  },
  description:
    "Crie receitas incríveis com os ingredientes que você já tem em casa usando inteligência artificial. Rápido, fácil e personalizado.",
  keywords: [
    "receitas",
    "culinária",
    "inteligência artificial",
    "ingredientes",
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
  applicationName: "Pitada",
  alternates: {
    canonical: "https://pitada.vercel.app",
    languages: {
      "pt-BR": "https://pitada.vercel.app",
    },
  },
  openGraph: {
    title: "Pitada | Receitas com IA",
    description:
      "Crie receitas incríveis com os ingredientes que você já tem em casa usando inteligência artificial. Rápido, fácil e personalizado.",
    url: "https://pitada.vercel.app",
    siteName: "Pitada",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://pitada.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Pitada - Gere receitas com IA a partir dos seus ingredientes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitada | Receitas com IA",
    description:
      "Crie receitas incríveis com os ingredientes que você já tem em casa usando inteligência artificial. Rápido, fácil e personalizado.",
    images: ["https://pitada.vercel.app/preview.png"],
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
  appleWebApp: {
    capable: true,
    title: "Pitada",
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                const theme = savedTheme || (prefersDark ? "dark" : "light");

                document.documentElement.setAttribute("data-theme", theme);
              } catch (e) {}
            })();
                `,
          }}
        />
      </head>
      <body className={`${lora.variable} antialiased bg-bg`}>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
