import { Link } from "react-router-dom";
const Bestseller = () => {
  const BestsellerList = [
    {
      image: "./img/bestseller1.png",
      header: "Graphic Design",
      header2: "English Department",
      price: "$16.48",
      price2: "$6.48",
    },
    {
      image: "./img/bestseller2.png",
      header: "Graphic Design",
      header2: "English Department",
      price: "$16.48",
      price2: "$6.48",
    },
    {
      image: "./img/bestseller3.png",
      header: "Graphic Design",
      header2: "English Department",
      price: "$16.48",
      price2: "$6.48",
    },
    {
      image: "./img/bestseller4.png",
      header: "Graphic Design",
      header2: "English Department",
      price: "$16.48",
      price2: "$6.48",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] py-12 font-['montserrat'] ">
      <div className="flex flex-col items-center">
        <div className="w-[80%] text-left">
          <h3 className="font-bold  mb-6 text-[#252B42] text-2xl">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="m-auto" />
        <div className="gap-12 flex flex-row">
          {BestsellerList.map((item, index) => (
            <div key={index} className="p-2 text-center shadow-lg">
              <img src={item.image} className="m-auto py-2"></img>
              <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
                {item.header}
              </h5>
              <Link
                to="/english-department"
                className="pb-3 font-bold text-sm text-center text-[#737373] "
              >
                {item.header2}
              </Link>
              <div className="pt-3">
                <h5 className="text-[#BDBDBD] font-bold">
                  {item.price}
                  <span className="text-[#23856D] font-bold ">
                     {item.price2} 
                  </span>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bestseller;
