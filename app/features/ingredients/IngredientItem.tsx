"use client";

import { TiDelete } from "react-icons/ti";
import { motion } from "motion/react";
import { slideDown } from "@/app/motion/animations";

interface IngredientItemProps {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

export default function IngredientItem({
  id,
  name,
  onRemove,
}: IngredientItemProps) {
  return (
    <motion.li
      layoutId={id}
      key={id}
      {...slideDown}
      className="font-ui text-lg text-text mx-2 font-semibold line-clamp-2 mb-1 flex items-center"
      role="listitem"
    >
      <button
        className="cursor-pointer rounded-full px-1 items-center"
        title="Remover ingrediente"
        onClick={() => onRemove(id)}
        aria-label={`Remover ${name} da lista`}
        type="button"
      >
        <TiDelete className="w-5 h-5 hover:text-primary" aria-hidden="true" />
      </button>
      <span>{name}</span>
    </motion.li>
  );
}
