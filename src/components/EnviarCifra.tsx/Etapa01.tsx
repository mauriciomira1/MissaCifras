import React from "react";
import InputData from "./InputData";

const Etapa01 = () => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>
      <InputData placeholder="Nome da música" />
      <InputData placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)" />
      <InputData placeholder="Nome o cantor" />
      <InputData placeholder="Nome do compositor (opcional)" />
      <InputData placeholder="Tom da música" />
      <InputData placeholder="BPM (batimentos por minuto)" />
    </div>
  );
};

export default Etapa01;
