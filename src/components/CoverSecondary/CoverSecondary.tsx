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

  return (
    <div className="flex flex-wrap justify-between max-w-[90rem] w-auto">
      <Image
        src={cover01}
        alt={title01}
        className={`rounded-lg ${styles.cover}`}
      />
      <Image
        src={cover02}
        alt={title02}
        className={`rounded-lg ${styles.cover}`}
      />
      <Image
        src={cover03}
        alt={title03}
        className={`rounded-lg ${styles.cover}`}
      />
    </div>
  );
};

export default CoverSecondary;
