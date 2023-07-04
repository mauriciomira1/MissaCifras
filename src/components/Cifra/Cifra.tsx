interface CifraProps {
  cifraELetra: string;
}

const Cifra = ({ cifraELetra }: CifraProps) => {
  // Expressão regular para encontrar o texto entre "|"
  let regex = /\|([^|]+)\|/g;

  // Substitui o texto correspondente pela versão com a cor verde
  let newText = cifraELetra.replace(
    regex,
    (match, p1) => `|<span class="text-secondaryColor font-bold">${p1}</span>|`
  );
  console.log(newText);

  return <pre className="font-cifra">{newText}</pre>;
};

export default Cifra;
