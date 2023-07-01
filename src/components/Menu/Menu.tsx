"use client"; // Usar o 'lado do cliente' ao invés do lado do servidor para esse componente

// Hooks do React
import { useState } from "react";

// Importando SVGs

// Importando imagens
import logo from "../../public/images/generic/logo.png";
import searchIcon from "../../public/images/generic/search-icon.svg";
import Image from "next/image";
import userIcon from "../../public/images/generic/user.svg";
import Link from "next/link";

const Menu = () => {
  const [search, setSearch] = useState("");
  const classNameFromItemsMenu =
    "h-full px-2 hover:border-b-4 font-text font-bold border-primaryColor flex flex-wrap items-center justify-center gap-1 text-secondaryColor hover:text-primaryColor hover:cursor-pointer duration-100";

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
            <Image src={searchIcon} alt="Pesquisar" width={20} />
          </span>
          <input
            className="placeholder:font-normal placeholder:text-gray-400 block bg-white w-full border border-slate-300 rounded-full py-1.5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-400 sm:text-sm hover:bg-gray-50"
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
            <Link href="/acordes">ACORDES</Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/colabore">COLABORE</Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/fale-conosco">FALE CONOSCO</Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="enviar-cifra">ENVIAR CIFRA</Link>
          </li>
          <li className="h-8 flex  font-text font-bold flex-wrap items-center justify-center gap-1 text-white bg-secondaryColor px-2 rounded hover:bg-red-600 hover:cursor-pointer pr-3 pl-2 ml-2">
            <Image src={userIcon} alt="Usuário" />
            CADASTRE-SE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
