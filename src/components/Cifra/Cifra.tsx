interface CifraProps {
  cifraELetra: string;
}

const Cifra = ({ cifraELetra }: CifraProps) => {
  // Expressão regular para encontrar o texto entre "|"
  let regex =
    /(?<=\n)(\s{2,}[A-G]#?b?(?:maj|min|sus|m|M)?\d?(?:\/[A-G]#?b?)?\s{2,})(?=\s)/g;

  // Substitui o texto correspondente pela versão com a cor secundária (laranja)
  let newText = cifraELetra.replace(regex, (match, p1) => `|${p1}|`);

  const parts = newText.split("|");
  const elements = parts.map((part, index) => {
    if (index % 2 === 1) {
      return <button className="text-secondaryColor font-bold">{part}</button>;
    } else {
      return part;
    }
  });

  return <pre className="font-cifra">{elements}</pre>;
};

export default Cifra;
