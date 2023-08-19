import Link from "next/link";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface ItemMenuLateralProps {
  onClick: MouseEventHandler;
  icon: IconType;
  name: String;
}

const ItemMenuLateral = ({ onClick, icon, name }: ItemMenuLateralProps) => {
  const Icon = icon;
  return (
    <>
      <Link
        href="/dashboard/enviar-cifra"
        onClick={onClick}
        className="flex gap-2 text-white font-text font-semibold items-center px-3 py-2 active:text-secondaryColor duration-150"
      >
        <Icon className="text-2xl" />
        <span className="hidden md:block">{name}</span>
      </Link>
    </>
  );
};

export default ItemMenuLateral;
