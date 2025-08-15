import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-bg text-text">
        <p className="font-brand text-4xl">PITADA</p>
        <p className="text-center text-lg font-ui">
          Receitas com o que tem em casa.
        </p>
      </main>
    </>
  );
}
