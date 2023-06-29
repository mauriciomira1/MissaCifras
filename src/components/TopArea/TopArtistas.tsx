import ArtistaTop from "./ArtistaTop";
import MusicaTop from "./MusicaTop";
import Artist01 from "../../public/images/artists/missionario-shalom.jpg";

const TopArtistas = () => {
  return (
    <div>
      <h1 className="text-right font-highlight font-bold uppercase text-4xl text-primaryColor mb-4">
        TOP ARTISTAS
      </h1>
      <div>
        <ArtistaTop
          idAuthor="123"
          Author="Missionário shalom"
          MusicName="Eis me aqui"
          MusicNumber={1}
          Photo={Artist01}
        />
      </div>
    </div>
  );
};

export default TopArtistas;
