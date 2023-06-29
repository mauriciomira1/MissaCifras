interface itemProps {
  MusicNumber: number;
  MusicName: string;
  MusicAuthor: string;
}

const MusicaTop = (props: itemProps) => {
  return (
    <div className="w-72 h-28 bg-[#FFF0EC] rounded-e-lg border-s-2 hover:border-secondaryColor border-opacity-100 flex items-center gap-7">
      <h1 className="font-text font-black text-7xl ml-7 hover:text-secondaryColor text-gray-200">
        {props.MusicNumber}
      </h1>
      <div className="">
        <h2 className="font-black font-text text-lg -mb-2">
          {props.MusicName}
        </h2>
        <h3 className="font-text text-gray-600 text-sm">{props.MusicAuthor}</h3>
      </div>
    </div>
  );
};

export default MusicaTop;
