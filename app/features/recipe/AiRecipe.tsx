import ReactMarkdown from "react-markdown";

export default function AiRecipe(props: { recipe: string }) {
  return (
    <section
      className="font-ui text-lg pb-8 lg:w-[600px] lg:mx-auto text-left"
      aria-labelledby="section-title"
      role="region"
    >
      <h3
        id="section-title"
        className="font-ui font-semibold text-2xl text-balance text-accent pb-4"
      >
        Receita sugerida:
      </h3>
      <article
        className="break-words prose"
        role="article"
        aria-label="Conteúdo da receita"
      >
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
