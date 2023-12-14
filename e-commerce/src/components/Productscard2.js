const Producstcard2 = () => {
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
      <div className="container m-auto ml-[10rem]  max-w-screen-lg">
        <div className="flex flex-row pt-12">
          <div className="flex flex-col ml-8 items-start">
            <div className="flex flex-row">
              <h3 className="text-2xl font-bold text-text-color mr-4">
                BESTSELLER PRODUCTS
              </h3>
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
            <div className="flex flex-wrap  gap-x-9 mt-6 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center w-[11rem] mb-8"
                >
                  <img
                    className="w-[11rem] h-[10rem]"
                    src={item.image}
                    alt=""
                  />
                  <h5 className="text-[#252B42] font-bold">Graphic Design</h5>
                  <a className="text-[#737373] font-bold" href="#">
                    English Department
                  </a>
                  <h5 className="text-[#BDBDBD] font-bold">
                    $16.48
                    <span className="text-[#23856D] font-bold ">$6.48</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Producstcard2;
