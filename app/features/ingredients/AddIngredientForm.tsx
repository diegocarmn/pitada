import React from "react";
import { IoAdd } from "react-icons/io5";
import type { AddIngredientFormProps } from "@/app/types/types";
import { motion } from "motion/react";
import { scaleIn } from "@/app/motion/animations";
import { generateIngredientId } from "@/app/actions/generateUUID";

export default function AddIngredientForm({
  setIngredients,
}: AddIngredientFormProps) {
  async function addIngredient(formData: FormData) {
    const ingredientName = formData.get("ingredient") as string;
    if (ingredientName) {
      const id = await generateIngredientId();
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id, name: ingredientName },
      ]);
    } else {
      return;
    }
  }

  return (
    <motion.form
      {...scaleIn}
      action={addIngredient}
      className="flex items-center py-4 lg:w-[600px] lg:mx-auto"
      aria-label="Adicionar ingredientes"
    >
      <input
        type="text"
        name="ingredient"
        placeholder="Ex.: tomate"
        maxLength={80}
        className="border-y border-l border-border rounded-l-3xl px-4 py-2 w-full outline-none text-text font-semibold bg-surface font-ui focus:border-primary shadow-sm"
        aria-label="Digite um ingrediente"
        aria-describedby="ingredient-help"
        required
      />

      <span id="ingredient-help" className="sr-only">
        Digite o nome de um ingrediente que você tem em casa
      </span>

      <button
        type="submit"
        title="Adicionar ingrediente"
        className="bg-primary text-text rounded-r-3xl py-2 px-4 border-t border-b border-r border-primary font-ui font-semibold shadow-sm cursor-pointer"
        aria-label="Adicionar ingrediente à lista"
      >
        <IoAdd className="h-6 w-6" aria-hidden="true" />
      </button>
    </motion.form>
  );
}
