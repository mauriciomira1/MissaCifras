import { useNewMusic } from "@/contexts/useNewMusicContext";

const Etapa04 = () => {
  const { cifra } = useNewMusic();
  console.log(cifra);

  const MusicaCifrada = cifra?.letra.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    } else {
      const chordIndex = cifra.chordsList.map(
        () => cifra.chordsList.index === index
      );
      console.log(chordIndex);
      /*       const chord =
        chordIndex !== -1 ? cifra.chordsList[chordIndex].acorde : null; */

      return (
        <span key={index} className="group relative">
          <div>
            <span>{/* Incluir acorde aqui */}</span>
            <span id={`char-${index}`}>{char}</span>
          </div>
        </span>
      );
    }
  });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 04 - REVISÃO
      </h1>
      <div>{MusicaCifrada}</div>
    </div>
  );
};

export default Etapa04;
