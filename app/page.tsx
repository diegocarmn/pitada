"use client";

import Header from "./components/Header";
import IngredientsList from "./IngredientsList";
import AiRecipe from "./AiRecipe";
import { IoAdd } from "react-icons/io5";
import React from "react";

export default function Home() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipe, setRecipe] = React.useState<string | null>(null);
  const recipeSectionRef = React.useRef<HTMLDivElement | null>(null);

  function addIngredient(formData: FormData) {
    const ingredient = formData.get("ingredient") as string;
    if (ingredient) {
      setIngredients((prevIngredients) => [ingredient, ...prevIngredients]);
    } else {
      return;
    }
  }

  const removeIngredient = (index: number) => {
    setIngredients((prevIngredients) => {
      const newIngredients = [...prevIngredients];
      newIngredients.splice(index, 1);
      return newIngredients;
    });
  };

 React.useEffect(() => {
   if (recipeSectionRef.current !== null && recipe !== "") {
     const element = recipeSectionRef.current;
     const elementPosition =
       element.getBoundingClientRect().top + window.pageYOffset;
     const offsetPosition = elementPosition - 75; 

     window.scrollTo({
       top: offsetPosition,
       behavior: "smooth",
     });
   }
 }, [recipe]);

  return (
    <>
      <Header />
      <main className="flex flex-col bg-bg text-text px-4 pt-20 sm:max-w-3/4 sm:mx-auto md:max-w-2/3 lg:text-center">
        <section className="">
          <h2 className="font-ui pt-8 sm:pt-15 font-semibold text-3xl text-balance text-accent md:text-5xl">
            Descubra receitas incríveis com o que você já tem!
          </h2>

          <p className="font-semibold font-ui py-4 text-lg md:text-xl text-balance">
            Digite os ingredientes que tem em casa e a Pitada cria uma receita
            deliciosa!
          </p>
        </section>
        <form
          action={addIngredient}
          className="flex items-center py-4 lg:w-[600px] lg:mx-auto"
        >
          <input
            type="text"
            name="ingredient"
            placeholder="Ex.: tomate"
            className="border border-border rounded-l-3xl px-4 py-2 w-full outline-none text-text font-semibold bg-surface font-ui focus:border-primary shadow-sm"
          />
          <button
            type="submit"
            title="Adicionar ingrediente"
            className="bg-primary hover:bg-[#ff7e5a] text-black rounded-r-3xl py-2.5 px-4 border-t border-b border-r border-primary font-ui font-semibold shadow-sm cursor-pointer"
          >
            <IoAdd className="h-5 w-5" />
          </button>
        </form>
        {ingredients.length > 0 ? (
          <IngredientsList
            list={ingredients}
            removeIngredient={removeIngredient}
            setRecipe={setRecipe}
          />
        ) : null}
        {recipe && (
          <AiRecipe recipe={recipe} ref={recipeSectionRef} />
        )}
      </main>
    </>
  );
}
