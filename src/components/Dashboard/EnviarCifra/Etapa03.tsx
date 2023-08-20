"use client";

import { useState } from "react";

const Etapa03 = () => {
  const [cifraDaMusica, setCifraDaMusica] = useState<string>("");

  const handleChange = (ev: any) => {
    setCifraDaMusica(ev.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 02 - CIFRA
      </h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={18}
        className="bg-gray-200 w-full rounded text-sm"
        value={cifraDaMusica}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Etapa03;
