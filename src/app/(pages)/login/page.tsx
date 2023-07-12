// Hooks do next
import Link from "next/link";

// Componente de formulário
import FormularioLogin from "./FormularioLogin";

// Ícones
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A3F78] to-[#EA9D9D] w-full h-screen flex-col md:flex-row flex items-center justify-center gap-6">
      <div className="flex flex-col justify-center items-end">
        <h1 className="font-highlight text-tertiaryColor text-5xl mb-2 text-center md:text-right">
          Nada do que é
          <br /> feito por amor
          <br /> é pequeno.
        </h1>
        <cite className="italic text-white text-xs">
          Santa Terezinha do Menino Jesus
        </cite>
        <p className="text-white font-text font-semibold text-sm w-72 mt-6 text-center md:text-right">
          Faça login na nossa plataforma e venha evangelizar através da música.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="flex items-center gap-2 font-text font-semibold mb-4 text-white">
            <FaArrowLeft />
            Voltar para Home
          </div>
        </Link>
        <FormularioLogin />
      </div>
    </div>
  );
};
export default Login;
