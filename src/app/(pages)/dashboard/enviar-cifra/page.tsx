"use client";

import Btn from "@/components/EnviarCifra.tsx/Btn";
import Etapa01 from "@/components/EnviarCifra.tsx/Etapa01";
import Etapa02 from "@/components/EnviarCifra.tsx/Etapa02";
import Etapa03 from "@/components/EnviarCifra.tsx/Etapa03";
import Etapa04 from "@/components/EnviarCifra.tsx/Etapa04";
import React, { useState } from "react";

const EnviarCifra = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";
  const activeBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-green-400  rounded-md h-8 w-8";
  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnClick = () => {
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        <Etapa01 />;
        break;
      case 1:
        <Etapa02 />;
        break;
      case 2:
        <Etapa03 />;
        break;
      case 3:
        <Etapa04 />;
        break;
      case 4:
        break;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full items-center my-6">
      <h1 className="font-text text-4xl font-black text-primaryColor">
        DASHBOARD
      </h1>
      <div className="flex justify-center gap-1 mt-2 mb-5 w-full">
        <button className={activeBtn}>1</button>
        <button className={selectedBtn}>2</button>
        <button className={inactiveBtn}>3</button>
        <button className={inactiveBtn}>4</button>
      </div>
      <div className="w-10/12">{renderDaEtapaAtual()}</div>
      <Btn name="PRÓXIMO" onClick={btnClick} />
    </div>
  );
};

export default EnviarCifra;
