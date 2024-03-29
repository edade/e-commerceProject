import { useSelector } from "react-redux";

const BestSellerProductCard = () => {
  const products = useSelector((state) => state.product.productList);

  return (
    <div className="bg-[#FAFAFA]  font-['montserrat']">
      <h3 className="flex lg:ml-28 lg:text-left text-[#252B42] font-bold text-2xl py-4 lg:justify-start sm:justify-center sm:ml-0 ">
        BESTSELLER PRODUCTS
      </h3>
      <hr className="mx-28"></hr>
      <div className="flex lg:flex-wrap lg:flex-row sm:flex-col sm:justify-center sm:items-center lg:justify-center gap-14 my-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  text-center lg:w-[15rem] sm:w-full  mb-8 shadow-lg hover:shadow-slate-800 gap-3 "
          >
            <img
              className="lg:w-full lg:h-full sm:w-full lg:px-0 sm:px-8 "
              src={item?.images?.[0]?.url}
              alt=""
            />
            <h5 className="text-[#252B42]  font-bold">{item.name}</h5>
            <a className="text-[#737373] text-sm font-bold py-2" href="#">
              {item.description}
            </a>
            <h5 className="text-[#23856D] font-bold ">${item.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSellerProductCard;
