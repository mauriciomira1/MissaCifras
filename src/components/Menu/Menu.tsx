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

interface MenuProps {
  pageSrc: string;
}

const Menu = () => {
  const onClickMenuItem = ({ pageSrc }: MenuProps) => {};

  const [search, setSearch] = useState("");
  const classNameFromItemsMenu =
    "h-full px-2 hover:border-b-4 font-text font-bold border-primaryColor flex flex-wrap items-center justify-center gap-1 text-secondaryColor hover:text-primaryColor hover:cursor-pointer duration-100";

  return (
    <div className="flex flex-wrap px-3 h-16 border-b-1 shadow-md items-center justify-between">
      {/* Logotipo */}
      <div className="hover:opacity-60 cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="Logotipo" width={150} />
        </Link>
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
            <Link href="/pages/acordes" className="py-6">
              ACORDES
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/pages/colabore" className="py-6">
              COLABORE
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/pages/fale-conosco" className="py-6">
              FALE CONOSCO
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/pages/enviar-cifra" className="py-6">
              ENVIAR CIFRA
            </Link>
          </li>
          <li className="h-8 flex font-text font-bold items-center justify-center text-white bg-secondaryColor px-2 rounded hover:bg-red-600 hover:cursor-pointer pr-3 pl-2 ml-2">
            <Link href="/pages/cadastro" className="flex items-center">
              <Image src={userIcon} alt="Usuário" />
              CADASTRE-SE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
