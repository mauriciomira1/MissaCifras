import Image from "next/image";
import Link from "next/link";
import bg404 from "../public/images/not-found/404-bg.jpg";

const NotFound = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-wrap items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src={bg404} alt="Erro 404" width={600} className="max-w-lg" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold flex flex-col items-center">
          <span className="text-8xl text-tertiary">Oops,</span>
          <br />
          Acho que você se perdeu.
        </h1>
        <p>
          Clique no botão abaixo para ser redirecionado para a Página Inicial
        </p>
        <Link
          href="/"
          className="bg-purple-800 px-4 py-2 rounded text-white m-4"
        >
          Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
