import { TiDelete } from "react-icons/ti";

export default function IngredientsList(props: {
  list: string[];
  removeIngredient?: (index: number) => void;
}) {
  return (
    <>
      <section className="my-4 lg:w-[600px] lg:mx-auto lg:text-left">
        <h3 className="font-ui font-semibold text-2xl text-balance text-accent pb-4">
          Ingredientes adicionados:
        </h3>
        <ul className="list-disc md:pl-5 break-all ">
          {props.list.map((ingredient, index) => (
            <li
              key={index}
              className="font-ui text-lg text-text mx-2 font-semibold line-clamp-2 mb-1"
            >
              <button
                className="cursor-pointer rounded-full px-1 items-center"
                title="Remover"
                onClick={() => props.removeIngredient?.(index)}
              >
                <TiDelete className="inline-block w-5 h-5 hover:text-primary" />
              </button>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section className="border border-border font-ui bg-surface rounded-3xl shadow-sm py-4 lg:w-[600px] lg:mx-auto">
        {props.list.length < 3 && (
          <p className="text-sm font-semibold text-text/70 mx-5">
            Adicione pelo menos 3 ingredientes para encontrar receitas.
          </p>
        )}
        {props.list.length >= 3 && (
          <div className="mx-5 md:px-2 py-2 flex flex-col md:flex-row md:items-center text-center md:text-left">
            <section>
              <h3 className="text-lg font-semibold text-text pb-2">
                Pronto para uma receita?
              </h3>
              <p>Busque uma receita com sua lista de ingredientes.</p>
            </section>
            <button className="mt-3 md:mt-0 md:ml-4 bg-primary hover:bg-[#ff7e5a] text-black rounded-3xl py-2.5 px-6 border-t border-b border-r border-primary font-ui font-semibold shadow-sm cursor-pointer whitespace-nowrap">
              Buscar receita
            </button>
          </div>
        )}
      </section>
    </>
  );
}
