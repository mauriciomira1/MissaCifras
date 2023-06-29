import TopAcessadas from "./TopAcessadas";
import TopArtistas from "./TopArtistas";

const TopMain = () => {
  return (
    <div className="flex flex-wrap justify-between w-full px-4">
      <TopAcessadas />
      <TopArtistas />
    </div>
  );
};

export default TopMain;
