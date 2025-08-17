import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
Você é um assistente que recebe uma lista de ingredientes que o usuário tem e sugere uma receita que ele poderia fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes mencionados na receita. A receita pode incluir ingredientes adicionais que não foram mencionados, mas tente não incluir muitos ingredientes extras. Formate sua resposta em markdown para facilitar a renderização em uma página da web, em negrito apenas os títulos de Ingredientes, Modo de preparo e nome da receita (sem colocar "Receita: "). Sem mensagem de saudação ou despedida. Apenas forneça a receita. Resuma em 1024 tokens ou menos.
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ingredients }: { ingredients: string[] } = body;

    if (
      !ingredients ||
      !Array.isArray(ingredients) ||
      ingredients.length === 0
    ) {
      return NextResponse.json(
        { error: "Lista de ingredientes é obrigatória" },
        { status: 400 }
      );
    }

    const ingredientsString = ingredients.join(", ");

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Eu tenho ${ingredientsString}. Por favor me dê uma receita que você recomenda que eu faça.`,
        },
      ],
      max_tokens: 1024,
      temperature: 0.5,
    });

    const recipe = response.choices[0]?.message?.content;

    if (!recipe) {
      return NextResponse.json(
        { error: "Não foi possível gerar uma receita" },
        { status: 500 }
      );
    }
    console.log("Receita gerada com sucesso:", recipe);

    return NextResponse.json({ recipe });
  } catch (error) {
    console.error("Erro ao gerar receita com Groq:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
