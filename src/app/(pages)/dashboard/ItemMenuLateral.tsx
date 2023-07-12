import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { IconType } from "react-icons";

interface ItemMenuLateralProps {
  href: Url;
  icon: IconType;
  name: String;
}

const ItemMenuLateral = ({ href, icon, name }: ItemMenuLateralProps) => {
  const Icon = icon;
  return (
    <>
      <Link href={href}>
        <div className="flex gap-2 text-white font-text font-semibold items-center px-3 py-2 hover:text-secondaryColor duration-150">
          <Icon className="text-2xl" />
          <span className="hidden md:block">{name}</span>
        </div>
      </Link>
    </>
  );
};

export default ItemMenuLateral;
