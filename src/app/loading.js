const Loading = () => {
  return (
    <div className="w-full h-screen">
      <div className="animate-pulse rounded-md flex flex-wrap w-full h-14 mx-4">
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
        <div className="rounded-md space-x-2 w-16 h-4 bg-gray-200"></div>
      </div>

      <div className="animate-pulse flex flex-wrap w-full h-14 mx-4 bg-gray-200">
        <div className="rounded w-1/3 h-14"></div>
        <div className="rounded w-1/3 h-14"></div>
        <div className="rounded w-1/3 h-14"></div>
      </div>

      <div className="animate-pulse rounded flex flex-wrap w-40 h-14 mx-4 bg-gray-200">
      </div>
    </div>
  );
};

export default Loading;
