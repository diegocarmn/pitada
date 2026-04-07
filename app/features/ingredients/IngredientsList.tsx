"use client";

import type { IngredientsListProps } from "@/app/types/types";
import { motion, AnimatePresence } from "motion/react";
import { slideDown } from "@/app/motion/animations";
import IngredientItem from "./IngredientItem";

export default function IngredientsList({
  ingredients,
  setIngredients,
}: IngredientsListProps) {
  // Debug: verificar IDs
  if (ingredients.length > 0) {
    console.log(
      "Ingredients IDs:",
      ingredients.map((i) => ({ id: i.id, name: i.name })),
    );
    const ids = ingredients.map((i) => i.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length > 0) {
      console.warn("⚠️ IDs duplicadas detectadas:", duplicates);
    }
  }

  const removeIngredient = (id: string) => {
    setIngredients((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <motion.section
      {...slideDown}
      className="my-4 lg:w-[600px] lg:mx-auto lg:text-left"
      aria-labelledby="ingredients-title"
    >
      <h3
        id="ingredients-title"
        className="font-ui font-semibold text-2xl text-balance text-accent pb-4"
      >
        Ingredientes adicionados:
      </h3>
      <ul
        className="list-disc md:pl-5 break-all"
        role="list"
        aria-label="Lista de ingredientes adicionados"
      >
        <AnimatePresence mode="sync">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              id={ingredient.id}
              name={ingredient.name}
              onRemove={removeIngredient}
            />
          ))}
        </AnimatePresence>
      </ul>
    </motion.section>
  );
}
