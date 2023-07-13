import { MouseEventHandler } from "react";

interface BtnProps {
  name: "PRÓXIMO" | "ANTERIOR";
  onClick?: MouseEventHandler;
}

const Btn = ({ name, onClick }: BtnProps) => {
  let Colors = "";
  if (name === "PRÓXIMO") {
    Colors = "bg-primaryColor text-white";
  } else {
    Colors = "bg-gray-300 text-black";
  }

  return (
    <button
      className={`${Colors} font-text font-bold w-28 py-1.5 rounded`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Btn;
