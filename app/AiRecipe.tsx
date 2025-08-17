import ReactMarkdown from "react-markdown";

export default function AiRecipe(props: { recipe: string }) {
  return (
    <section className="border border-border font-ui bg-surface rounded-3xl shadow-sm py-4 lg:w-[600px] lg:mx-auto">
      <h3 className="text-lg font-semibold text-text pb-2">
        Aqui está a sua receita:
      </h3>
      <article>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}