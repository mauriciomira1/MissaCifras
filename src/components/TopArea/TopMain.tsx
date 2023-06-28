import TopAcessadas from "./TopAcessadas";
import TopArtistas from "./TopArtistas";

const TopMain = () => {
  return (
    <div className="flex flex-wrap">
      <TopAcessadas />
      <TopArtistas />
    </div>
  );
};

export default TopMain;
