"use client";

import IngredientsList from "./features/ingredients/IngredientsList";
import AiRecipe from "./features/recipe/AiRecipe";
import React from "react";
import useScrollToRecipe from "./hooks/useScrollToRecipe";
import AddIngredientForm from "./features/ingredients/AddIngredientForm";
import GetRecipeCard from "./features/recipe/GetRecipeCard";
import { motion, AnimatePresence } from "motion/react";
import { scaleIn, slideUp } from "./motion/animations";
import type { Ingredient } from "./types/types";

export default function Home() {
  const [ingredients, setIngredients] = React.useState<Ingredient[] | []>([]);
  const [recipe, setRecipe] = React.useState<string | null>(null);
  const recipeSectionRef = React.useRef<HTMLDivElement | null>(null);

  useScrollToRecipe(recipeSectionRef, recipe);

  return (
    <main
      className="flex flex-col bg-bg text-text px-4 pt-20 sm:max-w-3/4 sm:mx-auto md:max-w-2/3 lg:text-center"
      role="main"
    >
      <motion.section {...scaleIn}>
        <h2
          id="hero-title"
          className="font-ui pt-8 sm:pt-15 font-semibold text-3xl text-balance text-accent md:text-5xl"
          aria-labelledby="hero-title"
        >
          Descubra receitas incríveis com o que você já tem!
        </h2>

        <p className="font-semibold font-ui py-4 text-lg md:text-xl text-balance">
          Digite os ingredientes que tem em casa e crie uma receita deliciosa em
          uma Pitada de mágica!
        </p>
      </motion.section>

      <AddIngredientForm setIngredients={setIngredients} />

      <AnimatePresence>
        {ingredients.length > 0 ? (
          <>
            <IngredientsList
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <GetRecipeCard ingredients={ingredients} setRecipe={setRecipe} />
          </>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {recipe && (
          <motion.div
            {...slideUp}
            ref={recipeSectionRef}
            aria-live="polite"
            aria-label="Receita gerada"
          >
            <AiRecipe recipe={recipe} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
