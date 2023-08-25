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
  chordsList?: string[];
  userWhoSent?: string;
}

interface ListSongsProps extends SongDataProps {
  letra: string;
  cifra: string;
}

/* interface LetraProps {
  letra: string;
} */
/* interface CifraProps {
  cifra: string;
} */

interface ContextNewMusicProps {
  setSongData: Dispatch<SetStateAction<SongDataProps>>;
  setLetra: Dispatch<SetStateAction<string>>;
  setCifra: Dispatch<SetStateAction<string>>;
  songData: SongDataProps;
  letra: string;
  cifra: string;
  chordsList: string[];
  EtapaSong01: (data: SongDataProps) => void;
  EtapaSong02: (data: string) => void;
}

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState<SongDataProps>({
    musica: "",
    versao: "",
    cantor: "",
    compositor: "",
    tom: "",
    bpm: 0,
    video: "",
    hashtags: "",
    momentoDaMissa: "",
  });
  const [listSongs, setListSongs] = useState([{} as ListSongsProps]);
  const [letra, setLetra] = useState<string>("");
  const [cifra, setCifra] = useState<string>("");

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
    setLetra(data);
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
