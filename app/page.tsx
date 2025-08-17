import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col bg-bg text-primary px-4 pt-20 sm:max-w-3/4 sm:mx-auto md:max-w-2/3">
        <section className="pt-15">
          <h2 className="font-ui font-semibold text-3xl text-balance md:text-5xl">
            Descubra receitas incríveis com o que você já tem!
          </h2>
          <p className="font-semibold text-text font-ui py-4 text-lg md:text-xl">
            Digite os ingredientes que você tem em casa e a Pitada cria uma receita
            deliciosa!
          </p>
        </section>
      </main>
    </>
  );
}
