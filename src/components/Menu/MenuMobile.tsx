import Image from "next/image";
import Link from "next/link";
import userIcon from "../../public/images/generic/user.svg";

const MenuMobile = () => {
  const classNameFromItemsMenu =
    "h-full px-2 hover:border-b-4 font-text font-bold border-primaryColor flex flex-wrap items-center justify-center gap-1 text-white hover:text-secondaryColor hover:cursor-pointer duration-100";

  return (
    <ul className="flex flex-col items-center font-semibold">
      <li className="h-full px-2 hover:border-b-4 font-text font-bold border-primaryColor flex flex-wrap items-center justify-center gap-1 text-white hover:text-secondaryColor hover:cursor-pointer duration-100">
        X
      </li>
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
  );
};

export default MenuMobile;
