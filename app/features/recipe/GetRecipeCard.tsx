import { useGetRecipe } from "@/app/hooks/useGetRecipe";
import type { GetRecipeCardProps } from "@/app/types/types";
import Toast from "@/app/components/Toast";
import { motion, AnimatePresence } from "motion/react";
import { slideDown, fadeIn } from "@/app/motion/animations";

export default function GetRecipeCard({
  ingredients,
  setRecipe,
}: GetRecipeCardProps) {
  const MIN_INGREDIENTS = 3;
  const getRecipeMutation = useGetRecipe();
  const ingredientNames = ingredients.map((ingredient) => ingredient.name);

  const handleGetRecipe = () => {
    getRecipeMutation.mutate(ingredientNames, {
      onSuccess: (recipe) => {
        setRecipe(recipe);
      },
    });
  };

  return (
    <AnimatePresence>
      <motion.section
        {...slideDown}
        key="recipe-card"
        className="border border-border font-ui bg-surface rounded-3xl shadow-sm py-4 mb-8 lg:w-[600px] lg:mx-auto"
        aria-labelledby="recipe-section-title"
      >
        {ingredients.length < MIN_INGREDIENTS && (
          <motion.p
            key="min-ingredients-message"
            {...fadeIn}
            className="text-sm font-semibold text-text/70 mx-5"
            role="status"
            aria-live="polite"
          >
            Adicione pelo menos {MIN_INGREDIENTS} ingredientes para encontrar
            receitas.
          </motion.p>
        )}

        {ingredients.length >= MIN_INGREDIENTS && (
          <motion.div
            key="recipe-form"
            {...fadeIn}
            className="mx-5 md:px-2 py-2 flex flex-col md:flex-row md:items-center text-center md:text-left"
          >
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
              className="mt-3 md:mt-0 md:ml-4 bg-primary text-text rounded-3xl py-2.5 px-6 border-t border-b border-r border-primary font-ui font-semibold shadow-sm hover:scale-104 active:scale-97 transition-transform duration-100 ease-in-out cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGetRecipe}
              disabled={getRecipeMutation.isPending}
              aria-label="Buscar receita com os ingredientes adicionados"
              aria-describedby="recipe-button-status"
              type="button"
            >
              {getRecipeMutation.isPending
                ? "Buscando receita..."
                : "Buscar receita"}
            </button>

            <div
              id="recipe-button-status"
              className="sr-only"
              aria-live="polite"
            >
              {getRecipeMutation.isPending
                ? "Buscando receita, aguarde..."
                : "Clique para buscar uma receita"}
            </div>
          </motion.div>
        )}
      </motion.section>

      {getRecipeMutation.isError && (
        <Toast
          key="error-toast"
          errorMessage={getRecipeMutation.error?.message}
        />
      )}
    </AnimatePresence>
  );
}
