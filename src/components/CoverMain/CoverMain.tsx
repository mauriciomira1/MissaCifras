import Image from "next/image";
import coverMainImg from "../../public/images/home/cover-main.jpg";
import ButtonStyle01 from "../Buttons/ButtonStyle01";

export default function CoverMain() {
  const titleCoverMain = "Nova aula do Missionário Shalom";

  return (
    <div className="w-auto bg-black max-w-[90rem] pb-1.5 flex relative justify-center items-center">
      <Image
        src={coverMainImg}
        alt="titleCoverMain"
        className="rounded-lg bg- w-full h-full"
      />
      <div className="absolute flex flex-col items-center">
        <h1 className="cursor-default text-3xl text-white font-highlight">
          MISSIONÁRIO
        </h1>
        <h2 className="cursor-default text-6xl text-tertiaryColor font-highlight font-black">
          SHALOM
        </h2>
        <ButtonStyle01
          className="bg-gray-800 opacity-80 text-white hover:opacity-90 mt-2"
          btnTitle="Nova aula disponível"
        />
        <p className="font-text font-medium text-white drop-shadow-sm cursor-default">
          Professor Vitor Santiago
        </p>
      </div>
    </div>
  );
}
