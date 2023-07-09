import Cifra from "@/components/Cifra/Cifra";
import Link from "next/link";
import React from "react";

const getData = async () => {
  // Usando "npm i -g http-server" + comando "http-server" dentro da pasta do arquivo .json
  const res = await fetch(
    "http://192.168.3.2:8080/manda-teus-anjos-anjos-de-resgate.json"
  );
  if (!res.ok) {
    throw new Error("Fetch data falhou!");
  }
  return res.json();
};

const CifraArea = async () => {
  const cifra = await getData();

  return (
    <div className="font-cifra">
      <h1 className="font-text font-bold text-primaryColor text-3xl">
        {cifra.title}
      </h1>
      <Link
        href={cifra.artistPage}
        className="font-text text-gray-400 hover:text-secondaryColor hover:font-bold"
      >
        {cifra.artist}
      </Link>
      <br />
      <br />
      <p>
        Tom: <span className="font-bold text-secondaryColor">{cifra.tom}</span>
      </p>
      <p>
        Tempo: <span className="font-bold">{cifra.tempo} BPM</span>
      </p>
      <br />

      <Cifra cifraELetra={cifra.song} />
    </div>
  );
};

export default CifraArea;
