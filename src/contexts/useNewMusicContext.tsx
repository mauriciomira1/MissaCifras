"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface songDataProps {
  id: number;
  musica: string;
  versao: string;
  cantor: string;
  compositor: string;
  tom: string;
  bpm: number;
  video: string;
  letra: string;
  cifra: string;
  hashtags: string;
  momentoDaMissa: string;
  qtdDeCliques: number;
  userWhoSent: string;
}
interface ContextNewMusicProps {
  songData: songDataProps;
  listSongs: songDataProps[];
  Etapa01: (data: songDataProps) => void;
  Etapa02: (data: string) => void;
}

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState({} as songDataProps);
  const [listSongs, setListSongs] = useState([{} as songDataProps]);

  const Etapa01 = (data: songDataProps) => {
    setSongData((prevState) => ({
      ...prevState,
      id: Math.floor(Math.random() * 1000000000),
      musica: data.musica,
      versao: data.versao,
      cantor: data.cantor,
      compositor: data.compositor,
      tom: data.tom,
      bpm: data.bpm,
      video: data.video,
    }));
  };

  const Etapa02 = (data: string) => {
    setSongData((prevState) => ({
      ...prevState,
      letra: data,
    }));
  };

  return (
    <ContextNewMusic.Provider value={{ songData, listSongs, Etapa01, Etapa02 }}>
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
