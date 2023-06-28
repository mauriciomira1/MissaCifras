"use client"; // Usar o 'lado do cliente' ao invés do lado do servidor para esse componente
//CSS
import styles from "./Menu.module.css";

// Importando imagens
import logo from "../../public/images/generic/logo.png";
import searchIcon from "../../public/images/generic/search-icon.svg";

// React
import { useState } from "react";

// Next
import Image from "next/image";
/* import Acordes from "@/shared/icons/acordes";
import Colabore from "@/shared/icons/colabore";
import FaleConosco from "@/shared/icons/faleConosco";
import EnviarCifra from "@/shared/icons/enviarCifra"; */
import User from "@/shared/icons/user";

const Menu = () => {
  const [search, setSearch] = useState("");
  const classNameFromItemsMenu =
    "h-full px-2 hover:border-b-2 border-primaryColor flex flex-wrap items-center justify-center gap-1 text-secondaryColor hover:text-primaryColor hover:cursor-pointer duration-100";

  return (
    <div className="flex flex-wrap px-3 h-16 border-b-1 shadow-md items-center justify-between">
      {/* Logotipo */}
      <div className="hover:opacity-60 cursor-pointer">
        <Image src={logo} alt="Logotipo" width={150} />
      </div>
      {/* Barra de pesquisa */}
      <div className="w-96">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image src={searchIcon} alt="Pesquisar" />
          </span>
          <input
            className="placeholder:italic placeholder:font-light block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-400 sm:text-sm"
            placeholder="Qual música você vai louvar hoje?"
            type="text"
            name="search"
            autoComplete="off"
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </label>
      </div>
      {/* Links de navegação no site */}
      <div className="h-full flex items-center">
        <ul className="flex flex-wrap items-center h-full font-semibold text-xs">
          <li className={classNameFromItemsMenu}>
            {/*             <Acordes /> */}
            ACORDES
          </li>
          <li className={classNameFromItemsMenu}>
            {/*             <Colabore /> */}
            COLABORE
          </li>
          <li className={classNameFromItemsMenu}>
            {/*             <FaleConosco /> */}
            FALE CONOSCO
          </li>
          <li className={classNameFromItemsMenu}>
            {/*             <EnviarCifra /> */}
            ENVIAR CIFRA
          </li>
          <li className="h-8 flex flex-wrap items-center justify-center gap-1 text-white bg-secondaryColor px-2 rounded hover:bg-red-600 hover:cursor-pointer pr-3">
            <User />
            CADASTRE-SE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
