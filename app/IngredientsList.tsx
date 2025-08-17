"use client";

import { TiDelete } from "react-icons/ti";
import { useState } from "react";

export default function IngredientsList(props: {
  list: string[];
  setRecipe: (recipe: string | null) => void;
  removeIngredient?: (index: number) => void;
}) {
  const minIngredients = 3;
  const [isLoading, setIsLoading] = useState(false);

  async function recipe() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: props.list }),
      });

      const data = await response.json();

      if (response.ok) {
        props.setRecipe(data.recipe);
      } else {
        console.error("Erro ao buscar receita:", data.error);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
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
          {props.list.map((ingredient, index) => (
            <li
              key={index}
              className="font-ui text-lg text-text mx-2 font-semibold line-clamp-2 mb-1  flex items-center"
              role="listitem"
            >
              <button
                className="cursor-pointer rounded-full px-1 items-center"
                title={`Remover ${ingredient}`}
                onClick={() => props.removeIngredient?.(index)}
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
      <section
        className="border border-border font-ui bg-surface rounded-3xl shadow-sm py-4 mb-8 lg:w-[600px] lg:mx-auto"
        aria-labelledby="recipe-section-title"
      >
        {props.list.length < minIngredients && (
          <p
            className="text-sm font-semibold text-text/70 mx-5"
            role="status"
            aria-live="polite"
          >
            Adicione pelo menos {minIngredients} ingredientes para encontrar
            receitas.
          </p>
        )}
        {props.list.length >= minIngredients && (
          <div className="mx-5 md:px-2 py-2 flex flex-col md:flex-row md:items-center text-center md:text-left">
            <section>
              <h3
                id="recipe-section-title"
                className="text-lg font-semibold text-text pb-2"
              >
                Pronto para uma receita?
              </h3>
              <p>Busque uma receita com sua lista de ingredientes.</p>
            </section>
            <button
              className="mt-3 md:mt-0 md:ml-4 bg-primary hover:bg-[#ff7e5a] text-black rounded-3xl py-2.5 px-6 border-t border-b border-r border-primary font-ui font-semibold shadow-sm hover:scale-104 active:scale-97 transition-transform duration-100 ease-in-out cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={recipe}
              disabled={isLoading}
              aria-label="Buscar receita com os ingredientes adicionados"
              aria-describedby="recipe-button-status"
              type="button"
            >
              {isLoading ? "Buscando receita..." : "Buscar receita"}
            </button>
            <div
              id="recipe-button-status"
              className="sr-only"
              aria-live="polite"
            >
              {isLoading
                ? "Buscando receita, aguarde..."
                : "Clique para buscar uma receita"}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
