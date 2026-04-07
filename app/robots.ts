import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://pitada.vercel.app/sitemap.xml",
    host: "https://pitada.vercel.app",
  };
}