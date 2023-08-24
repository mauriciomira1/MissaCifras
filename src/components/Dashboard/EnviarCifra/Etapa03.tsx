"use client";
import "./etapa03.css";
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";

interface chordProps {
  acorde: string;
  index: number;
}

const Etapa03 = () => {
  const { letra } = useNewMusic();
  const [cifraDaMusica, setCifraDaMusica] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<any>();
  const [chordsList, setChordsList] = useState<chordProps[]>([]);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCifraDaMusica(ev.target.value);
  };

  const openCifraWindow = (
    ev: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (activeIndex === null || activeIndex !== index) {
      setActiveIndex(index);
    }
    ev.preventDefault();
  };

  const closeWindow = () => {
    setActiveIndex(null);
  };

  const handleChordChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setChordsList((prevChords) => {
      const chordIndex = prevChords.findIndex((chord) => chord.index === index);
      if (chordIndex !== -1) {
        // Atualiza o acorde existente
        const updatedChords = [...prevChords];

        updatedChords[chordIndex] = {
          ...updatedChords[chordIndex],
          acorde: ev.target.value,
        };
        return updatedChords;
      } else {
        // Adiciona novo acorde
        return prevChords.concat({ acorde: ev.target.value, index });
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (ev: any) => {
      if (
        !ev.target.closest("#caixaDeAcorde") &&
        !ev.target.closest("button")
      ) {
        setActiveIndex(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    console.log(chordsList);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [chordsList]);

  const buttons = letra.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    } else {
      return (
        <span key={index} className="group relative">
          <span id="chordItem" className="bg-red-200">
            {chordsList &&
              chordsList.find((chord) => chord.index === index)?.acorde}
          </span>
          <button
            id={`char-${index}`}
            onClick={(ev) => openCifraWindow(ev, index)}
            className="hover:text-secondaryColor active:text-primaryColor"
          >
            <div
              id="caixaDeAcorde"
              className={`px-1 py-2 text-black z-10 bg-white w-24 rounded absolute top-0 -left-8 shadow-md border-2 border-gray-300 shadow-gray-400 transform -translate-y-full ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <GrFormClose
                className="absolute right-0 top-0"
                onClick={closeWindow}
              />

              <input
                type="text"
                name="acorde"
                id="acorde"
                className="w-20 outline-none text-sm"
                onChange={(ev) => handleChordChange(ev, index)}
              />
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
