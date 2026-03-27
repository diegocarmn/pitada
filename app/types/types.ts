import type { Dispatch, SetStateAction } from "react";

export type IngredientsListProps = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

export type AddIngredientFormProps = {
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

export type GetRecipeCardProps = {
  ingredients: string[] | [];
  setRecipe: (recipe: string | null) => void;
};

export type useAutoDismissProps = {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  timeout: number;
};