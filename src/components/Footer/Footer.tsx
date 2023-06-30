import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-text h-48 bg-gray-950 flex flex-col items-center justify-between">
      <div className="text-white flex h-28 font-bold text-sm">
        <Link
          href="/quem-somos"
          className="duration-150 hover:border-t-4 border-t-tertiaryColor hover:text-tertiaryColor hover:underline flex items-end w-52 justify-center"
        >
          Quem somos
        </Link>
        <Link
          href="/quem-somos"
          className="duration-150 hover:border-t-4 border-t-tertiaryColor hover:text-tertiaryColor hover:underline flex items-end w-52 justify-center"
        >
          Fale Conosco
        </Link>
        <Link
          href="/quem-somos"
          className="duration-150 hover:border-t-4 border-t-tertiaryColor hover:text-tertiaryColor hover:underline flex items-end w-52 justify-center"
        >
          Quero ajudar
        </Link>
      </div>
      <div className="w-full flex items-start p-4">
        <p className="text-xs text-gray-400">
          2023® - O seu site de cifras católicas
          <br />
          Evangelizando através da música
        </p>
      </div>
    </div>
  );
};

export default Footer;
