"use client";

import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useState } from "react";

const Etapa03 = () => {
  const { letra } = useNewMusic();
  const [cifraDaMusica, setCifraDaMusica] = useState<string>("");

  const handleChange = (ev: any) => {
    setCifraDaMusica(ev.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 03 - CIFRA
      </h1>
      <div className="whitespace-pre-wrap">{letra}</div>
    </div>
  );
};

export default Etapa03;
