const ProductListCard = () => {
  const ProductData = [
    { image: "./img/productcard/img1.png" },
    { image: "./img/productcard/img2.png" },
    { image: "./img/productcard/img3.png" },
    { image: "./img/productcard/img4.png" },
    { image: "./img/productcard/img5.png" },
    { image: "./img/productcard/img6.png" },
    { image: "./img/productcard/img7.png" },
    { image: "./img/productcard/img8.png" },
    { image: "./img/productcard/img9.png" },
    { image: "./img/productcard/img10.png" },
    { image: "./img/productcard/img11.png" },
    { image: "./img/productcard/img12.png" },
  ];

  return (
    <div className="font-['montserrat']">
      <div className="flex flex-wrap justify-center gap-20 my-8  font-['montserrat']">
        {ProductData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  text-center lg:w-[15rem] sm:w-full sm:mx-8 mb-8 shadow-lg hover:shadow-slate-800 "
          >
            <img className="lg:w-[15rem] lg:h-[15rem] sm:w-full sm:h-full" src={item.image} alt="" />
            <h5 className="text-[#252B42]  font-bold">Graphic Design</h5>
            <a className="text-[#737373] text-sm font-bold py-2" href="#">
              English Department
            </a>
            <h5 className="text-[#BDBDBD] font-bold">
              $16.48 <span className="text-[#23856D] font-bold ">$6.48</span>
            </h5>
            <div className="flex text-center justify-center py-2">
              <button class="w-4 h-4 bg-[#23A6F0] rounded-full mr-2"></button>
              <button class="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>
              <button class="w-4 h-4 bg-[#E77C40] rounded-full mr-2"></button>
              <button class="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs sm:my-12">
        <button className="border rounded-l-lg h-14 w-20 text-[#737373] bg-[#BDBDBD] ">
          First
        </button>
        <button className="border h-14 w-10 text-[#23A6F0]">1</button>
        <button className="border h-14 w-10 text-white bg-[#23A6F0] ">2</button>
        <button className="border  h-14 w-10 text-[#23A6F0]"> 3</button>
        <button className="border rounded-r-lg h-14 w-20 text-[#23A6F0]">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListCard;
