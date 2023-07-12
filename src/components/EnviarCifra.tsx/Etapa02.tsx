import React from "react";
import Btn from "./Btn";

const Etapa02 = () => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>
      {/*       <textarea name="" id="" cols="30" rows="10"></textarea> */}
      <Btn name="PRÓXIMO" />
    </div>
  );
};

export default Etapa02;
