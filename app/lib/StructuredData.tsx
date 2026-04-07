export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "WebApplication"],
    "@id": "https://pitada.vercel.app/#website",
    name: "Pitada",
    url: "https://pitada.vercel.app",
    applicationCategory: "FoodApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "pt-BR",
    description:
      "Pitada é uma aplicação web que usa inteligência artificial para gerar receitas personalizadas a partir dos ingredientes que o usuário já tem em casa.",
    image: "https://pitada.vercel.app/preview.png",
    screenshot: "https://pitada.vercel.app/preview.png",

    featureList: [
      "Geração de receitas com IA",
      "Busca por ingredientes disponíveis",
      "Receitas personalizadas",
      "Interface em português",
      "Acesso gratuito",
    ],

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },

    audience: {
      "@type": "Audience",
      audienceType: "Home cooks and food enthusiasts",
    },

    isAccessibleForFree: true,
    isFamilyFriendly: true,

    author: {
      "@type": "Person",
      "@id": "https://diegocarmona.me/#person",
      name: "Diego Carmona",
      url: "https://diegocarmona.me",
    },

    creator: {
      "@type": "Person",
      "@id": "https://diegocarmona.me/#person",
      name: "Diego Carmona",
      url: "https://diegocarmona.me",
    },

    mainEntityOfPage: "https://pitada.vercel.app",
    identifier: "https://pitada.vercel.app/#website",

    about: [
      {
        "@type": "Thing",
        name: "Receitas culinárias",
      },
      {
        "@type": "Thing",
        name: "Culinária com inteligência artificial"
      },
    ],

    keywords: [
      "receitas",
      "culinária",
      "gerador de receitas",
      "receitas personalizadas",
      "inteligência artificial",
      "receitas com IA",
      "ingredientes",
      "gastronomia",
    ],
  };

   return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}