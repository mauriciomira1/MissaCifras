import Btn from "@/components/EnviarCifra.tsx/Btn";
import Etapa01 from "@/components/EnviarCifra.tsx/Etapa01";
import Etapa02 from "@/components/EnviarCifra.tsx/Etapa02";
import Etapa03 from "@/components/EnviarCifra.tsx/Etapa03";
import Etapa04 from "@/components/EnviarCifra.tsx/Etapa04";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EnviarCifra = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [btnState, setBtnState] = useState();

  const createSong = (data: any) => {
    console.log(data);
  };

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";
  const activeBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-green-400  rounded-md h-8 w-8";
  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnProximo = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
  };

  const btnAnterior = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual - 1);
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        return <Etapa01 songData={createSong} />;

      case 1:
        return <Etapa02 />;

      case 2:
        return <Etapa03 />;

      case 3:
        return <Etapa04 />;

      default:
        return null;
    }
  };

  return (
    <form className="flex flex-col w-11/12 gap-2 items-center my-6">
      <h1 className="font-text text-4xl font-black text-primaryColor">
        DASHBOARD
      </h1>
      <div className="flex justify-center gap-1 mt-2 mb-5 w-full">
        <button className={selectedBtn} id="btn01">
          1
        </button>
        <button className={inactiveBtn} id="btn02">
          2
        </button>
        <button className={inactiveBtn} id="btn03">
          3
        </button>
        <button className={inactiveBtn} id="btn04">
          4
        </button>
      </div>
      <div className="w-full">{renderDaEtapaAtual()}</div>
      <div className="flex justify-between w-full">
        <Btn name="ANTERIOR" onClick={btnAnterior} />
        <Btn name="PRÓXIMO" onClick={btnProximo} />
      </div>
    </form>
  );
};

export default EnviarCifra;
