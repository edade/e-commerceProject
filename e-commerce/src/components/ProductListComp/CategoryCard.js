const CategoryCard = () => {
  const ShopCardList = [
    "./img/shopcard1.png",
    "./img/shopcard2.png",
    "./img/shopcard3.png",
    "./img/shopcard4.png",
    "./img/shopcard5.png",
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-10 font-['montserrat']">
      {ShopCardList.map((image, index) => (
        <div key={index} className="w-48">
          <div className="relative">
            <img src={image} alt="" className="w-full h-auto" />
            <div className="absolute top-20 left-10 text-white">
              <h6 className="text-2xl font-bold">CLOTHS</h6>
              <h2 className="text-xs font-semibold w-[94px] pt-1 h-[64px]">5 item</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryCard;
