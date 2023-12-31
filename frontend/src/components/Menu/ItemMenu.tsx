import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ItemMenuProps {
  href: Url;
  name: String;
}

const ItemMenu = ({ href, name }: ItemMenuProps) => {
  return (
    <li className="h-full px-2 hover:border-b-4 font-text font-bold border-primaryColor flex flex-wrap items-center justify-center gap-1 text-secondaryColor hover:text-primaryColor hover:cursor-pointer duration-100">
      <Link href={href} className="py-6 uppercase">
        {name}
      </Link>
    </li>
  );
};

export default ItemMenu;
