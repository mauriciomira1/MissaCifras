"use client";
import Btn from "@/components/Dashboard/EnviarCifra/Btn";
import Etapa01 from "@/components/Dashboard/EnviarCifra/Etapa01";
import Etapa02 from "@/components/Dashboard/EnviarCifra/Etapa02";
import Etapa03 from "@/components/Dashboard/EnviarCifra/Etapa03";
import Etapa04 from "@/components/Dashboard/EnviarCifra/Etapa04";
import { useState } from "react";

const EnviarCifraComponent = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [btnState, setBtnState] = useState(true);

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";
  const activeBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-green-400  rounded-md h-8 w-8";
  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnProximo = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
    if (etapaAtual === 2) {
      setBtnState(false);
    }
  };

  const btnAnterior = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual - 1);
    if (etapaAtual < 4) {
      setBtnState(true);
    }
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        return <Etapa01 />;

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
    <form className="flex flex-col w-full gap-2 items-center my-6">
      <h1 className="font-text text-2xl md:text-4xl font-black text-primaryColor">
        DASHBOARD
      </h1>
      <div className="flex justify-center gap-1 mt-2 mb-5 w-full">
        <button
          className={etapaAtual === 0 ? selectedBtn : inactiveBtn}
          id="btn01"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(0);
          }}
        >
          1
        </button>
        <button
          className={etapaAtual === 1 ? selectedBtn : inactiveBtn}
          id="btn02"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(1);
          }}
        >
          2
        </button>
        <button
          className={etapaAtual === 2 ? selectedBtn : inactiveBtn}
          id="btn03"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(2);
          }}
        >
          3
        </button>
        <button
          className={etapaAtual === 3 ? selectedBtn : inactiveBtn}
          id="btn04"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(3);
          }}
        >
          4
        </button>
      </div>
      <div className="w-full">{renderDaEtapaAtual()}</div>
      <div className="flex justify-between w-full">
        {etapaAtual === 0 ? (
          <div></div>
        ) : (
          <Btn name="ANTERIOR" id="btnAnterior" onClick={btnAnterior} />
        )}

        {btnState === true ? (
          <Btn name="PRÓXIMO" id="btnProximo" onClick={btnProximo} />
        ) : (
          <Btn name="ENVIAR" id="Enviar" />
        )}
      </div>
    </form>
  );
};

export default EnviarCifraComponent;
