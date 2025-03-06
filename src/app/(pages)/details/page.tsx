"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Playwrite_BR } from "next/font/google";
import data from "../../data/cards.json"; // Certifique-se de que esse JSON é um array válido

const playwrite = Playwrite_BR({
  weight: ["400"],
  variable: "--font-playwrite",
});

interface Card {
  numero: number;
  texto: string;
  imagem: string;
  cor: string;
  musica: string; // Pode ser um link do YouTube
}

// Função para extrair o ID do YouTube do link completo
function extrairIdDoYoutube(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^&\n?#]+))/
  );
  return match ? match[1] : "";
}

export default function DetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const numero = Number(searchParams.get("number"));
  const cor = searchParams.get("color") || "gray";

  const cards: Card[] = Array.isArray(data) ? data : [];
  const card = cards.find((item) => item.numero === numero && item.cor === cor);

  if (!card) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-bold">Carta não encontrada.</p>
        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => router.back()}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <h1
        className={`text-2xl font-bold text-black mb-4 font-playwrite ${playwrite.variable}`}
      >
        Carta #{card.numero}
      </h1>

      <div className="bg-pink-100 p-6 rounded-2xl shadow-xl flex flex-col items-center space-y-6 border border-pink-300">
        {/* Imagem */}
        <Image
          src={card.imagem}
          alt="Imagem"
          width={280}
          height={280}
          className="object-cover rounded-2xl shadow-md"
        />

        {/* Texto */}
        <p className="text-xl font-semibold text-pink-700 text-center max-w-sm break-words">
          {card.texto}
        </p>

        {/* Player do YouTube */}
        {card.musica.includes("youtube.com") ||
        card.musica.includes("youtu.be") ? (
          <iframe
            width="320"
            height="180"
            src={`https://www.youtube.com/embed/${extrairIdDoYoutube(
              card.musica
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        ) : (
          <p className="text-red-500">Link de música inválido</p>
        )}

        {/* Botão de Voltar */}
        <button
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={() => router.back()}
        >
          Voltar
        </button>
      </div>
    </main>
  );
}
