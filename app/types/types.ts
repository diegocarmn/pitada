import type { Dispatch, SetStateAction } from "react";

export type Ingredient = {
  id: string;
  name: string;
};

export type IngredientsListProps = {
  ingredients: Ingredient[];
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
};

export type AddIngredientFormProps = {
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
};

export type GetRecipeCardProps = {
  ingredients: Ingredient[] | [];
  setRecipe: (recipe: string | null) => void;
};

export type useAutoDismissProps = {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  timeout: number;
};
