"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Playwrite_BR } from "next/font/google";
import data from "@/app/data/cards.json"; // Importa os dados do JSON

const playwrite = Playwrite_BR({
  weight: ["400"],
  variable: "--font-playwrite",
});

export default function NumbersPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const color = searchParams.get("color") || "gray";

  // Filtra os elementos do JSON pela cor
  const filteredItems = data.filter((item) => item.cor === color);

  const handleClick = (number: number) => {
    router.push(`/details?color=${color}&number=${number}`);
  };

  return (
    <main>
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-pink-100">
        <h1
          className={`text-2xl font-bold mb-8 text-black ${playwrite.variable}`}
        >
          Escolha um número
        </h1>
        <div className="grid grid-cols-5 gap-4">
          {filteredItems.map((item, i) => (
            <button
              key={i + 1}
              className={`w-24 h-24 rounded-2xl text-white font-bold text-lg flex items-center justify-center border border-white bg-${color}-300`}
              onClick={() => handleClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
