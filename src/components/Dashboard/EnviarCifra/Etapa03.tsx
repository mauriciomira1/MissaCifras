"use client";
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useState } from "react";

const Etapa03 = () => {
  const { letra } = useNewMusic();
  const [cifraDaMusica, setCifraDaMusica] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<any>();

  const handleChange = (ev: any) => {
    setCifraDaMusica(ev.target.value);
  };

  const janelaDeCifra = (ev: any, index: number) => {
    setActiveIndex(index);
    ev.preventDefault();
    return (
      <div className="px-2 py-1 text-black z-10 bg-yellow-600 rounded relative shadow-md shadow-gray-800 top-50">
        <input type="text" name="acorde" id="acorde" />
      </div>
    );
  };

  const buttons = letra.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    } else {
      return (
        <span key={index} className="group relative">
          <button
            key={index}
            id={`char-${index}`}
            onClick={(ev) => janelaDeCifra(ev, index)}
            className="hover:font-bold hover:text-secondaryColor active:text-primaryColor"
          >
            <div
              className={`px-1 py-1 text-black z-10 bg-gray-100 w-20 rounded absolute top-0 -left-8 shadow-md border-2 shadow-gray-500 transform -translate-y-full ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <input type="text" name="acorde" id="acorde" className="w-16" />
            </div>
            {char}
          </button>
        </span>
      );
    }
  });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 03 - CIFRA
      </h1>
      <div className="whitespace-pre-wrap">
        {buttons}
        {/*         {letra} */}
      </div>
    </div>
  );
};

export default Etapa03;
