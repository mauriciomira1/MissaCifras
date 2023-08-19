import { Chicle } from "next/font/google";
import { createContext, useState } from "react";

const ContextNewMusic = createContext("");

const useNewMusicContext = () => {
  const [songData, setSongData] = useState({});

  return (
    <ContextNewMusic.Provider value={children}>
      {children}
    </ContextNewMusic.Provider>
  );
};

export default useNewMusicContext;
