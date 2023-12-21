const Producstcard = () => {
  const data = [
    { image: "./img/product-1.png" },
    { image: "./img/product-cover-2.png" },
    { image: "./img/product-cover-3.png" },
    { image: "./img/product-1.png" },
    { image: "./img/product-cover-2.png" },
    { image: "./img/product-cover-3.png" },
  ];
  return (
    <div>
      <div className="container flex sm:flex-col m-auto lg:ml-[10rem] lg:max-w-screen-lg">
        <div className="flex lg:flex-row sm:flex-col pt-12">
          <div className="relative">
            <img
              src="./img/card-cover-5.jpg"
              className="flex h-[35rem] w-[32rem]"
            ></img>
            <div className="absolute top-0 left-0 p-6 gap-[5px]">
              <h6 className="font-bold text-sm ">FURNITURE</h6>
              <h6 className="font-bold text-sm text-left text-[#737373]">
                5 Items
              </h6>
            </div>
          </div>
          <div className="flex flex-col ml-8 lg:items-center sm:items-center">
            <div className="flex lg:flex-row sm:flex-col">
              <h3 className="text-2xl font-bold text-[#252B42] mr-4 lg:pt-0 sm:pt-12">
                BESTSELLER PRODUCTS
              </h3>
              <div className="flex sm:flex-row">
                <button className="py-[10px] px-5 text-[#23A6F0] text-sm font-bold mr-4 items-start text-start ">
                  Men
                </button>
                <button className="py-[10px] px-5 text-[#737373] text-sm font-bold mr-4 ">
                  Women
                </button>
                <button className="py-[10px] px-5 text-[#737373] text-sm font-bold ">
                  Accessories
                </button>
              </div>
            </div>
            <div className="flex lg:flex-wrap lg:flex-row sm:flex-col sm:w-[80%] lg:gap-x-9 mt-6 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center lg:w-[11rem] mb-8 sm:w-full"
                >
                  <img
                    className="lg:w-[11rem] lg:h-[10rem] sm:w-full sm:h-full"
                    src={item.image}
                    alt=""
                  />
                  <h5 className="text-[#252B42] font-bold">Graphic Design</h5>
                  <a className="text-[#737373] font-bold" href="#">
                    English Department
                  </a>
                  <h5 className="text-[#BDBDBD] font-bold">
                    $16.48{" "}
                    <span className="text-[#23856D] font-bold ">$6.48</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producstcard;
