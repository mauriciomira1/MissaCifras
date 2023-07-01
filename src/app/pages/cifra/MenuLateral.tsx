import Image from "next/image";
import React from "react";
import CapaCantor from "../../../public/images/artists/anjos-de-resgate.jpg";
import Link from "next/link";

const MenuLateral = () => {
  const capaTitle = "Anjos de Resgate";

  return (
    <div className="flex flex-col gap-3 w-40 bg-gray-200 rounded items-center py-4 mx-4">
      <div className="flex">
        <Image src={CapaCantor} alt={capaTitle} />
      </div>
      <div className="flex justify-center bg-white shadow-md gap-5 w-32 py-2 font-bold rounded">
        <span>-</span>
        <span>Tom</span>
        <span>+</span>
      </div>
      <div className="flex justify-center bg-white shadow-md gap-5 w-32 py-2 font-bold rounded">
        <span>-</span>
        <span>Letra</span>
        <span>+</span>
      </div>
      <div className="flex justify-center bg-white shadow-md gap-5 w-32 py-2 font-bold rounded">
        <span>adicionar ícone de +</span>
        <button>Adicionar à playlist</button>
      </div>
      <div className="flex justify-center text-white font-semibold bg-secondaryColor w-32 py-2 rounded shadow-md">
        <Link href="#">Informar erro</Link>
      </div>
    </div>
  );
};

export default MenuLateral;
