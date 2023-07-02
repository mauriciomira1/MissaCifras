import React from "react";
import MenuLateral from "./MenuLateral";
import CifraArea from "./CifraArea";

const Cifra = () => {
  return (
    <div className="flex w-full justify-between">
      <MenuLateral />
      <CifraArea />
      <div className="flex items-center text-white justify-center w-96 h-52 rounded-md bg-gray-800">
        Vídeo do youtube
      </div>
    </div>
  );
};

export default Cifra;
