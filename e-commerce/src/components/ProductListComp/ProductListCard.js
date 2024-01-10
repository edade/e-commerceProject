import { useSelector } from "react-redux";

const ProductListCard = () => {
  const products = useSelector((state) => state.product.productList.products);

  return (
    <div className="font-['montserrat']">
      <div className="flex flex-wrap justify-center gap-16 my-8  font-['montserrat']">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center lg:w-[15rem] sm:w-full lg:mx-0 sm:mx-8 mb-8 shadow-lg hover:shadow-slate-800 "
          >
            <img
              className="lg:w-[15rem] lg:h-[15rem] sm:w-full sm:h-full"
              src={item?.images?.[0]?.url}
              alt=""
            />
            <h5 className="text-[#252B42]  font-bold">{item.name}</h5>
            <div className="text-[#737373] text-sm font-bold py-2" href="#">
              {item.description}
            </div>
            <h5 className="text-[#23856D] font-bold">${item.price} </h5>
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
