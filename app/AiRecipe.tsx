import ReactMarkdown from "react-markdown";

export default function AiRecipe(props: {
  recipe: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={props.ref}
      className="font-ui text-lg pt-4 pb-8 lg:w-[600px] lg:mx-auto text-left"
    >
      <h3 className="font-ui font-semibold text-2xl text-balance text-accent pb-4 pt-4">
        Receita sugerida:
      </h3>
      <article className="break-words prose">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}