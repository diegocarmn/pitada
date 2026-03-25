import React from "react";

export default function useScrollToRecipe(
  ref: React.RefObject<HTMLDivElement | null>,
  recipe: string | null,
) {
  React.useEffect(() => {
    if (ref.current !== null && recipe !== null) {
      const element = ref.current;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 90;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [recipe]);
}
