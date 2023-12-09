function Card() {
  return (
    <div className="h-[450px] p-5">
      <div className="text-center">
        <h3 className="text-lg font-semibold">App Overview</h3>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-[200px] h-[200px] bg-gray-200 rounded-2xl flex flex-col justify-center text-center">
          <h3 className="text-lg font-semibold">Number of Users</h3>
          <h4 className="text-8xl font-semibold">8</h4>
        </div>
        <div className="w-[200px] h-[200px] bg-gray-200 rounded-2xl flex flex-col justify-center text-center">
          <h3 className="text-lg font-semibold">Total Items</h3>
          <h4 className="text-8xl font-semibold">68</h4>
        </div>
        <div className="w-[200px] h-[200px] bg-gray-200 rounded-2xl flex-1 flex flex-col justify-center text-center">
          <h3 className="text-lg font-semibold">Total Storage</h3>
          <h4 className="text-6xl font-semibold">2 MB</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
