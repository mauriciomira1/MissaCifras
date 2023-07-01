import Image from "next/image";

// Importando componente
import FormularioCadastro from "./FormularioCadastro";

// Hooks
import Link from "next/link";

// Ícones
import { FaArrowLeft } from "react-icons/fa";

const Cadastro = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A3F78] to-[#EA9D9D] w-full h-screen flex items-center justify-center gap-6">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="flex items-center gap-2 font-text font-semibold mb-4 text-white">
            <FaArrowLeft />
            Voltar para Home
          </div>
        </Link>
        <FormularioCadastro />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="font-highlight text-primaryColor text-5xl mb-2">
          Cantar é próprio
          <br /> de quem ama.
        </h1>
        <cite className="italic text-white text-xs">Santo Agostinho</cite>
        <p className="text-white font-text font-semibold text-sm w-72 mt-24">
          Cadastre-se e{" "}
          <span className="text-primaryColor font-bold">
            faça parte do nosso time
          </span>{" "}
          de evangelização através da música católica.
        </p>
      </div>
    </div>
  );
};
export default Cadastro;
