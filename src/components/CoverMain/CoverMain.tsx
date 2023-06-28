import Image from "next/image";
import coverMain from "../../public/images/home/cover-main.jpg";
import ButtonStyle01 from "../Buttons/ButtonStyle01";

export interface IAppProps {}

export default function CoverMain(props: IAppProps) {
  const titleCoverMain = "Nova aula do Missionário Shalom";

  return (
    <div className="w-auto max-w-[90rem] pb-1.5 flex relative justify-center">
      <Image src={coverMain} alt="titleCoverMain" className="rounded-lg" />
      <div className="absolute flex flex-col items-center">
        <h1 className="text-3xl font-barlow">MISSIONÁRIO</h1>
        <h2 className="text-4xl">SHALOM</h2>
        <ButtonStyle01
          className="bg-black opacity-50 text-white"
          btnTitle="Nova aula disponível"
        />
        <p>Professor Vitor Santiago</p>
      </div>
    </div>
  );
}
