import Image from "next/image";
import SiteLogo from "../../public/images/generic/logo.png";

const FormularioCadastro = () => {
  return (
    <form>
      <Image src={SiteLogo} alt="Missa Cifras" width={300} />
      <h2 className="font-text font-bold text-lg text-primaryColor">
        Bem-vindo
      </h2>
      <p className="font-text font-semibold text-base text-gray-300">
        Cadastre-se <strong>grátis</strong> e seja um evangelizador
      </p>
      <button className="w-full bg-white">Cadastrar com Google</button>
    </form>
  );
};

export default FormularioCadastro;
