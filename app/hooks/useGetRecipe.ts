import { useMutation } from "@tanstack/react-query";

export function useGetRecipe(onSuccess?: (recipe: string) => void) {
  return useMutation({
    mutationFn: async (ingredients: string[]) => {
      const res = await fetch("/api/ai/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro ao buscar receita");
      return data.recipe as string;
    },
    onSuccess,
  });
}
