import { useState } from "react";
import InputData from "./InputData";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Etapa01 = () => {
  const [songData, setSongData] = useState({
    musica: "",
    versao: "",
    cantor: "",
    compositor: "",
    tom: "",
    bpm: "",
    video: "",
  });

  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    setSongData((prevData) => ({ ...prevData, [name]: value }));
    console.log(songData);
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>
      <InputData
        placeholder="Nome da música"
        name="musica"
        onChange={handleChange}
        value={songData.musica}
      />
      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        name="versao"
        onChange={handleChange}
        value={songData.versao}
      />
      <InputData
        placeholder="Nome o cantor"
        name="cantor"
        onChange={handleChange}
        value={songData.cantor}
      />
      <InputData
        placeholder="Nome do compositor (opcional)"
        name="compositor"
        onChange={handleChange}
        value={songData.compositor}
      />
      <InputData
        placeholder="Tom da música"
        name="tom"
        onChange={handleChange}
        value={songData.tom}
      />
      <InputData
        placeholder="BPM (batimentos por minuto)"
        type="number"
        name="bpm"
        onChange={handleChange}
        value={songData.bpm}
      />
      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        name="video"
        onChange={handleChange}
        value={songData.video}
      />
    </div>
  );
  return songData;
};

export default Etapa01;
