const Shopcard = () => {
  return (
    <div className="bg-[#FAFAFA] w-full text-[#252B42] font-['montserrat'] flex mx-auto lg:justify-around sm:justify-center">
      <div className="flex sm:w-full lg:flex-row sm:flex-col gap-10 py-20 sm:justify-center sm:items-center text-left">
        <div className="relative">
          <img className="" src="./img/unique.png" alt="Unique"></img>
          <div className="absolute top-20 left-10">
            <h6 className="text-xs font-semibold text-[#737373]">Your Space</h6>
            <h2 className="text-2xl font-bold w-[94px] h-[64px]">
              Unique Life
            </h2>
            <h6 className="text-xs font-semibold">Explore Items</h6>
          </div>
        </div>
        <div>
          <div className="relative">
            <img className="" src="./img/element.png" alt="Element"></img>
            <div className="absolute top-20 left-10">
              <h6 className="text-xs font-semibold text-[#737373]">
                Ends Today
              </h6>
              <h2 className="text-2xl font-bold w-[94px] h-[64px]">
                Elements Style
              </h2>
              <h6 className="text-xs font-semibold">Explore Items</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img className="" src="./img/element2.png" alt="Element2"></img>
            <div className="absolute top-20 left-10">
              <h6 className="text-xs font-semibold text-[#737373]">
                Ends Today
              </h6>
              <h2 className="text-2xl font-bold w-[94px] h-[64px]">
                Elements Style
              </h2>
              <h6 className="text-xs font-semibold">Explore Items</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopcard;
