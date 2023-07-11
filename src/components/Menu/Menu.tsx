"use client"; // Usar o 'lado do cliente' ao invés do lado do servidor para esse componente

//NextJS
import Link from "next/link";
import Image from "next/image";

// Hooks do React
import { useState } from "react";

// Importando Ícones
import searchIcon from "../../public/images/generic/search-icon.svg";
import userIcon from "../../public/images/generic/user.svg";
import { FiMenu } from "react-icons/fi";

// Importando imagens
import logo from "../../public/images/generic/logo.png";
import logoMobile from "../../public/images/generic/favicon.png";

// Componentes
import MenuMobile from "./MenuMobile";

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
      {/* Logotipo min-width: 1024px */}
      <div className="hidden lg:block hover:opacity-60 cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="Logotipo" width={150} />
        </Link>
      </div>
      {/* Menu sanduiche */}
      <div className="lg:hidden">
        <FiMenu className="text-2xl" />
      </div>
      <div className="w-64 absolute -ml-6 bg-primaryColor">
        <MenuMobile />
      </div>
      {/* Logotipo mobile */}
      <div className="lg:hidden hover:opacity-60 cursor-pointer">
        <Link href="/">
          <Image src={logoMobile} alt="Logotipo" width={50} />
        </Link>
      </div>
      {/* Barra de pesquisa */}
      <div className="w-64 lg:w-96">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image src={searchIcon} alt="Pesquisar" width={20} />
          </span>
          <input
            className="placeholder:font-normal placeholder:text-gray-400 block bg-white w-full border border-slate-300 rounded-full py-1.5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-400 sm:text-sm hover:bg-gray-50"
            placeholder="Vamos louvar?"
            type="text"
            name="search"
            autoComplete="off"
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </label>
      </div>
      {/* Links de navegação no site */}
      <div className="hidden h-full xl:flex items-center">
        <ul className="flex flex-wrap items-center h-full font-semibold text-xs">
          <li className={classNameFromItemsMenu}>
            <Link href="/acordes" className="py-6">
              ACORDES
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/colabore" className="py-6">
              COLABORE
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/fale-conosco" className="py-6">
              FALE CONOSCO
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/enviar-cifra" className="py-6">
              ENVIAR CIFRA
            </Link>
          </li>
          <li className={classNameFromItemsMenu}>
            <Link href="/login" className="py-6">
              LOGIN
            </Link>
          </li>
          <li className="h-8 flex font-text font-bold items-center justify-center text-white bg-secondaryColor px-2 rounded hover:bg-red-600 hover:cursor-pointer pr-3 pl-2 ml-2">
            <Link href="/cadastro" className="flex items-center">
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
