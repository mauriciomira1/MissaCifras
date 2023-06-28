import React from "react";

interface btnProps {
  btnTitle: string | "Botão";
  icon?: string;
  className: string;
  id?: string;
}

const ButtonStyle01 = (props: btnProps) => {
  return (
    <button
      className={`uppercase font-quicksand font-bold h-8 flex flex-wrap items-center justify-center gap-1 px-2 rounded ${props.className}`}
      id={props.id}
    >
      {props.icon}
      {props.btnTitle}
    </button>
  );
};

export default ButtonStyle01;
