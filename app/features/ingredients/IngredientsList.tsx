"use client";

import { TiDelete } from "react-icons/ti";
import type { IngredientsListProps } from "@/app/types/ingredients";

export default function IngredientsList({
  ingredients,
  setIngredients,
}: IngredientsListProps) {
  const removeIngredient = (index: number) => {
    setIngredients((prevIngredients) => {
      const newIngredients = [...prevIngredients];
      newIngredients.splice(index, 1);
      return newIngredients;
    });
  };

  return (
    <section
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
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="font-ui text-lg text-text mx-2 font-semibold line-clamp-2 mb-1 flex items-center"
            role="listitem"
          >
            <button
              className="cursor-pointer rounded-full px-1 items-center"
              title="Remover ingrediente"
              onClick={() => removeIngredient(index)}
              aria-label={`Remover ${ingredient} da lista`}
              type="button"
            >
              <TiDelete
                className="w-5 h-5 hover:text-primary"
                aria-hidden="true"
              />
            </button>
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
