// Next
import Image from "next/image";

interface itemProps {
  title: string;
  itemName: string;
}

const ItemMenu = (props: itemProps) => {
  return (
    <li className="flex flex-wrap items-center justify-center gap-1 text-secondaryColor fill-emerald-800  hover:text-primaryColor hover:cursor-pointer ">
      <{props.itemName}/>
{/*       <Image src={props.imgSrc} alt={props.title} className="w-6" /> */}
      {props.title}
    </li>
  );
};

export default ItemMenu;
