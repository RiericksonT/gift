"use client";
import { Playwrite_BR } from "next/font/google";
import { useRouter } from "next/navigation";

const playwrite = Playwrite_BR({
  weight: ["400"],
  variable: "--font-playwrite",
});

export default function Home() {
  const router = useRouter();

  const handleClick = (color: string) => {
    router.push(`/numbers?color=${color}`);
  };

  return (
    <main>
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-pink-100">
        <h1
          className={`text-2xl font-bold mb-8 text-black font-playwrite ${playwrite.variable}`}
        >
          Cartas para você!
        </h1>

        <div className="relative w-1/2 h-1/2 grid grid-cols-2 grid-rows-2 gap-6">
          {/* Fundo colorido do "+" */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-1/3 h-full bg-gray-300 absolute"></div>{" "}
            {/* Barra vertical */}
            <div className="h-1/3 w-full bg-gray-300 absolute"></div>{" "}
            {/* Barra horizontal */}
          </div>

          {/* Verde */}
          <div
            className="flex font-black w-full h-full aspect-square justify-center items-end text-center bg-green-400 border-4 border-white p-4 z-10 cursor-pointer"
            onClick={() => handleClick("green")}
          >
            Quando precisar de paz e leveza
          </div>

          {/* Azul */}
          <div
            className="flex font-black w-full h-full aspect-square justify-center items-end text-center bg-blue-500 border-4 border-white p-4 z-10 cursor-pointer"
            onClick={() => handleClick("blue")}
          >
            Quando precisar de ânimo e energia
          </div>

          {/* Rosa */}
          <div
            className="flex font-black w-full h-full aspect-square justify-center items-end text-center bg-pink-400 border-4 border-white p-4 z-10 cursor-pointer"
            onClick={() => handleClick("pink")}
          >
            Quando estiver triste e precisar de conforto
          </div>

          {/* Amarelo */}
          <div
            className="flex font-black w-full h-full aspect-square justify-center items-end text-center bg-yellow-200 border-4 border-white p-4 z-10 cursor-pointer"
            onClick={() => handleClick("yellow")}
          >
            Quando quiser sentir amor e carinho
          </div>
        </div>
      </div>
    </main>
  );
}
