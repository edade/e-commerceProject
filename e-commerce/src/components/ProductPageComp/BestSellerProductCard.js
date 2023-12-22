const BestSellerProductCard = () => {
   const BestSellerProductCardData = [
        { image: "./img/productPage/image2.png" },
        { image: "./img/productPage/image3.png" },
        { image: "./img/productPage/image4.png" },
        { image: "./img/productPage/image5.png" },
        { image: "./img/productPage/image6.png" },
        { image: "./img/productPage/image7.png" },
        { image: "./img/productPage/image8.png" },
        { image: "./img/productPage/image9.png" },

    ];
  return (
    <div className="bg-[#FAFAFA]  font-['montserrat']">
        <h3 className="flex lg:ml-28 lg:text-left text-[#252B42] font-bold text-2xl py-4 lg:justify-start sm:justify-center sm:ml-0 ">BESTSELLER PRODUCTS</h3>
        <hr className="mx-28"></hr>
      <div className="flex lg:flex-wrap lg:flex-row sm:flex-col sm:justify-center sm:items-center lg:justify-center gap-14 my-8">
        {BestSellerProductCardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  text-center lg:w-[15rem] sm:w-full  mb-8 shadow-lg hover:shadow-slate-800 "
          >
            <img className="lg:w-[15rem] lg:h-[15rem] sm:w-full sm:px-8 " src={item.image} alt="" />
            <h5 className="text-[#252B42]  font-bold">Graphic Design</h5>
            <a className="text-[#737373] text-sm font-bold py-2" href="#">
              English Department
            </a>
            <h5 className="text-[#BDBDBD] font-bold">
              $16.48 <span className="text-[#23856D] font-bold ">$6.48</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSellerProductCard;
