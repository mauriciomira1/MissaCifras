import InputData from "./InputData";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Etapa01Props {
  songData: SubmitHandler<FieldValues>;
}

const Etapa01 = ({ songData }: Etapa01Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(songData)}
      className="flex flex-col items-center gap-1.5"
    >
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>
      <InputData placeholder="Nome da música" name="musica" />
      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        {...register("versao")}
      />
      <InputData placeholder="Nome o cantor" name="cantor" />
      <InputData
        placeholder="Nome do compositor (opcional)"
        {...register("compositor")}
      />
      <InputData placeholder="Tom da música" name="tom" />
      <InputData
        placeholder="BPM (batimentos por minuto)"
        type="number"
        {...register("bpm")}
      />
      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        {...register("video")}
      />
    </form>
  );
};

export default Etapa01;
