"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SongDataProps {
  id?: number;
  musica: string;
  versao: string;
  cantor: string;
  compositor: string;
  tom: string;
  bpm: number;
  video: string;
  hashtags: string;
  momentoDaMissa: string;
  qtdDeCliques?: number;
  userWhoSent?: string;
}

interface LetraProps {
  letra: string;
}
interface CifraProps {
  cifra: string;
}

interface ListSongsProps {
  id: number;
  musica: string;
  versao: string;
  cantor: string;
  compositor: string;
  tom: string;
  bpm: number;
  video: string;
  hashtags: string;
  momentoDaMissa: string;
  qtdDeCliques: number;
  userWhoSent: string;
  letra: LetraProps;
  cifra: CifraProps;
}

interface ContextNewMusicProps {
  setSongData: Dispatch<SetStateAction<SongDataProps>>;
  setLetra: Dispatch<SetStateAction<LetraProps>>;
  setCifra: Dispatch<SetStateAction<CifraProps>>;
  songData: SongDataProps;
  letra: LetraProps;
  cifra: CifraProps;
  EtapaSong01: (data: SongDataProps) => void;
  EtapaSong02: (data: string) => void;
}

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState({} as SongDataProps);
  const [listSongs, setListSongs] = useState([{} as ListSongsProps]);
  const [letra, setLetra] = useState<LetraProps>({} as LetraProps);
  const [cifra, setCifra] = useState<CifraProps>({} as CifraProps);

  const EtapaSong01 = (data: SongDataProps) => {
    setSongData((prevState) => ({
      ...prevState,
      musica: data.musica,
      versao: data.versao,
      cantor: data.cantor,
      compositor: data.compositor,
      tom: data.tom,
      bpm: data.bpm,
      video: data.video,
      hashtags: data.hashtags,
      momentoDaMissa: data.momentoDaMissa,
    }));
  };

  const EtapaSong02 = (data: string) => {
    setSongData((prevState) => ({
      ...prevState,
      letra: data,
    }));
  };

  return (
    <ContextNewMusic.Provider
      value={{
        setSongData,
        setLetra,
        setCifra,
        songData,
        letra,
        cifra,
        EtapaSong01,
        EtapaSong02,
      }}
    >
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
