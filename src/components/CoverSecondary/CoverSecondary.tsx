//CSS
import styles from "./CoverSecondary.module.css";

// Nextjs
import Image from "next/image";

// Importando imagens
import cover01 from "../../public/images/home/cover01.jpg";
import cover02 from "../../public/images/home/cover02.jpg";
import cover03 from "../../public/images/home/cover03.jpg";

const CoverSecondary = () => {
  const title01 = "Palavras do Papa francisco";
  const title02 = "A história por trás da letra";
  const title03 = "Afinal, pra quê ensaio?";
  const redirectLink = (address: string) => {
    const LinkPalavrasDoPapa = address;
    window.location.href = LinkPalavrasDoPapa;
  };
  return (
    <div
      /*       onClick={(address) => redirectLink("/palavras-do-papa")} */
      className="flex flex-wrap justify-between max-w-[90rem] w-auto"
    >
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer ${styles.cover}`}
      >
        <Image
          src={cover01}
          alt={title01}
          className="transition-transform duration-300 transform scale-100 hover:scale-105"
        />
      </div>
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer ${styles.cover}`}
      >
        <Image
          src={cover02}
          alt={title02}
          className="transition-transform duration-300 transform scale-100 hover:scale-105"
        />
      </div>
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer ${styles.cover}`}
      >
        <Image
          src={cover03}
          alt={title03}
          className="transition-transform duration-300 transform scale-100 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CoverSecondary;
