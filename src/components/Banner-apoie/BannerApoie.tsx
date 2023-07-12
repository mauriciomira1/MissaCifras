import Image from "next/image";
import ButtonStyle01 from "../Buttons/ButtonStyle01";
import BackgroundImage from "../../public/images/home/banner-inf.jpg";

const BannerApoie = () => {
  return (
    <div className="w-full my-6 bg-black h-60 rounded-lg mb-2.5 flex relative justify-center items-center overflow-hidden">
      <div className="absolute w-full">
        <Image
          src={BackgroundImage}
          alt="Apoie o nosso projeto"
          className="object-cover scale-[250%] md:scale-150 lg:scale-110"
        />
      </div>
      <div className="px-6 absolute flex items-center justify-between w-full">
        <p className="leading-12 cursor-default text-3xl md:text-5xl text-white font-highlight">
          <span className="text-tertiaryColor">APOIE O</span>
          <br /> NOSSO
          <br />
          PROJETO
        </p>
        <div className="flex flex-col items-center">
          <p className="cursor-default text-lg text-tertiaryColor font-text font-black">
            Saiba como
          </p>
          <ButtonStyle01
            className="bg-white text-tertiaryColor duration-150 hover:bg-primaryColor mt-1 font-"
            btnTitle="AJUDAR"
            textFont="font-highlight"
            texSize="text-3xl"
          />
        </div>
        <div className="w-40"></div>
      </div>
    </div>
  );
};

export default BannerApoie;
