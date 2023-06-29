import MusicaTop from "./MusicaTop";

const TopAcessadas = () => {
  return (
    <div>
      <h1 className="font-text font-bold uppercase text-4xl">Mais acessadas</h1>
      <div className="flex flex-wrap gap-1">
        <div className="flex flex-col">
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
        </div>
        <div>
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
        </div>
      </div>
    </div>
  );
};

export default TopAcessadas;
