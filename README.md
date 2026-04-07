# <img alt="Pitada Logo" src="public/logo-full.svg" width="300">

<p>
  <img src="https://img.shields.io/badge/Next.js-15.5.12-black" />
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.3-blue" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC" />
  <img src="https://img.shields.io/badge/TanStack_Query-5.95-FF6B92" />
  <img src="https://img.shields.io/badge/Groq-AI-FF6B35" />
</p>

**Pitada** is an AI-powered app that turns ingredients into personalized recipes.

🔗 **Live:** https://pitada.vercel.app  
📦 **Repo:** https://github.com/diegocarmn/pitada

## ✨ Features

- AI-powered recipe generation (Groq / LLaMA 3.3)
- Dynamic ingredient management
- Dark/light mode with persistence
- Responsive, PWA-ready & accessible
- SEO optimized (Open Graph, structured data, sitemap)

## 📸 Screenshots

### Mobile (PWA)

<img alt="Mobile screenshots" src="public/screenshots/screenshot-mobile.jpg">

### Desktop

<img alt="Desktop screenshots" src="public/screenshots/screenshot-desktop.png">

## ⚙️ Technical Details

<details>
 <summary>🚀 Local Development</summary>

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Groq API Key

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/diegocarmn/pitada.git
   cd pitada
   ```

2. **Install dependencies**

   ```bash
   npm install # or yarn / pnpm / bun
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your Groq API key to the `.env.local` file:

   ```env
   GROQ_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   </details>

<details>
 <summary>📁 Project Structure</summary>

```
pitada/
├── app/
|   |-- actions/
|   |   └── generateUUID.ts            # Unique ID generator
│   ├── api/
│   │   └── ai/
│   │       └── recipe/
│   │           └── route.ts           # Recipe API endpoint
│   ├── components/
│   │   ├── Header.tsx                 # Header
│   │   ├── ThemeToggleButton.tsx      # Theme toggle button
│   │   └── Toast.tsx                  # Error notification (toast)
│   ├── features/
│   │   ├── ingredients/
|   |   |---|-- IngredientItem.tsx     # Ingredient list item
│   │   │   ├── IngredientsList.tsx    # Ingredient list
│   │   │   └── AddIngredientForm.tsx  # Add ingredient form
│   │   └── recipe/
│   │       ├── GetRecipeCard.tsx      # Card with recipe fetch button
│   │       └── AiRecipe.tsx           # Recipe display component
│   ├── hooks/
│   │   ├── useAutoDismiss.ts          # Auto-dismiss visual feedback
│   │   ├── useGetRecipe.ts            # TanStack Query hook for recipe fetching
│   │   └── useScrollToRecipe.ts       # Hook for scrolling to recipe
│   ├── motion/
│   │   └── animations.ts              # UI variants/animations
│   ├── providers/
│   │   └── ReactQueryProvider.tsx     # TanStack Query provider
│   ├── types/
│   │   └── types.ts                   # Shared types and interfaces
│   ├── globals.css                    # Global styles and theme variables
│   ├── layout.tsx                     # Root layout with metadata
│   └── page.tsx                       # Main page
├── public/
│   ├── icons/                         # PWA icons and favicons
│   ├── logo.svg                       # Main logo
│   ├── logo-full.svg                  # Full logo
│   ├── preview.png                    # Preview image
│   ├── screenshots/                   # App screenshots
│   └── manifest.json                  # PWA manifest
└── config files...                    # Project configuration
```

</details>

<details>
 <summary>🔌 API Reference</summary>

### Recipe Endpoint

**POST** `/api/ai/recipe`

Generates a recipe from provided ingredients using AI.

#### Technical Details

> ⚠️ Note: The API is optimized for Portuguese (PT-BR) ingredients and responses.

- **AI Provider**: Groq
- **Model**: `llama-3.3-70b-versatile`


#### Request Body

```json
{
  "ingredients": ["tomate", "queijo", "manjericão"]
}
```

**Parameters:**

- `ingredients` (string[]): List of available ingredients (minimum 3 recommended)

#### Response
```json
{
  "recipe": "## Bruschetta de Tomate\n\n**Ingredientes:**\n- Tomate\n- Queijo\n- Manjericão\n\n**Modo de preparo:**..."
}
```

**Fields:**

- `recipe` (string): Markdown-formatted recipe with:
  - Recipe name (in bold)
  - **Ingredients** section
  - **Instructions** section

#### Status Codes

- `200` - Recipe successfully generated
- `400` - Missing or empty ingredients list
- `422` - Invalid ingredients
- `500` - Generation error (AI or server failure)

#### Usage Example

```typescript
// TypeScript/React client
const response = await fetch("/api/ai/recipe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ingredients: ["frango", "alho", "tomate", "cebola"],
  }),
});

const data = await response.json();
console.log(data.recipe); // Markdown recipe
```



</details>

## 📄 License & Author

MIT · Made by [Diego Carmona](https://diegocarmona.me/) — [GitHub](https://github.com/diegocarmn) · [LinkedIn](https://linkedin.com/in/diegocarmn)

---

<p align="center">🎧 Built with code, curiosity, and a good playlist.</p>
