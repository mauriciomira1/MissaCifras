import Cifra from "@/components/Cifra/Cifra";
import Link from "next/link";
import React from "react";

const getData = async () => {
  // Usando "npm i -g http-server" + comando "http-server" dentro da pasta do arquivo .json
  const res = await fetch("http://192.168.3.2:8080/manda-teus-anjos.json");
  if (!res.ok) {
    throw new Error("Fetch data falhou!");
  }
  return res.json();
};

const CifraArea = async () => {
  /* const title = "Manda Teus Anjos";
  const artist = "Anjos de Resgate";
  const artistPage = "#";
  const tom = "D";
  const tempo = "133";
  const song = `[Intro]
|   D     |    D     |   G/D   |    G/D     |
|   D     |    D     |   G/D   |    G/D     |

          |   D    |     G     |     D    |      D      |
Manda teus anjos, sobre nós
    |       Bm        |         G        |      A     |      A    |
E abençoa todos que esperam em vós
                  |   D   |     G/D     |     D    |      Bm      |
Manda teus anjos, pra nos ensinar
        |   Em    |    A    |   D    |     D4    | 
A te louvar, e glorificar

    |            D             |      G          |     A     |      D      |
Envia também teu espírito de paz e amor
            |       F#m        |  Bm   |      Em      |      A     |
O meu coração tem sede, do meu criador
    |             D              |      G          |     A     |      D      |
Envia senhor os teus anjos, pra nos resgatar
               |    F#m     |      Bm       |      Em      |      A     |   D   |
Pra nos proteger de todo mau, para nos guiar, senhor

                    |   D    |     G     |     D    |      D      |
Manda teus anjos, sobre nós
       |       Bm        |         G        |        A    |      A    |
E abençoa todos que esperam em vós
                  |   D   |     G/D     |     D    |      Bm      |
Manda teus anjos, pra nos ensinar
        |   Em    |    A    |   D    |     D4    | 
A te louvar, e glorificar

               |          D            |        G           |      A      |     D     |
Quando acordo olho o céu e canto o meu louvor
      |       F#m        |   Bm   |      Em      |      A     |
De todas as manhãs, tu és o meu senhor
           |           D            |           G           |     A     |      D      |
Levantai-nos ó meu Deus e estende tuas mãos
      |      F#m      |      Bm       |         Em        |   A  |   D   |
Tu és o meu refúgio, nas minhas opressões senhor

    G        (A  G)     A       F#m       G  A
Confio em vós,      revele tua face para nós
   G       (A  G)    A        F#m           G  F#m  Em  A
Levanta-te,       e põe o teu escudo sobre nós

Manda teus anjos

[Solo] D  G  A  F#m  Bm  Em  A  D  B7

 E            A          E
Manda teus anjos, sobre nós
       C#m       A              B 
E abençoa todos que esperam em vós
           E  A              E B/D# C#m
Manda teus anjos, pra nos ensinar
         F#m    B     E  C#m
A te louvar, e glorificar
         F#m    B     E   C#m
A te louvar, e glorificar
         F#m   B  B4    
A te louvar, e te    amar

[Final] E  A/E  E  A/E  E`; */

  const cifra = await getData();
  console.log(cifra);

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
