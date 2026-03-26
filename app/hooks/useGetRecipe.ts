import { useMutation } from "@tanstack/react-query";

export function useGetRecipe() {
  return useMutation<string, Error, string[]>({
    mutationFn: async (ingredients) => {
      const res = await fetch("/api/ai/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      let data;

      try {
        data = await res.json();
      } catch {
        throw new Error("Erro ao processar resposta do servidor");
      }

      if (!res.ok) {
        throw new Error(data?.error || "Erro ao buscar receita");
      }

      return data.recipe;
    },
  });
}
