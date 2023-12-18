const ProductCard = () => {
  return (
    <div className="flex flex-row justify-center font-['montserrat'] gap-5 text-sm text-[#737373] font-bold ">
      <div className="flex-1">slider gelecek</div>
      <div className=" flex flex-1 flex-col text-start gap-3 mx-20">
        <h4 className="text-xl font-bold text-[#252B42]">Floating Phone</h4>
        <div className="flex flex-row items-center gap-2">
          <i className="bx bxs-star text-[#F3CD03] "></i>
          <i className="bx bxs-star text-[#F3CD03] "></i>
          <i className="bx bxs-star text-[#F3CD03] "></i>
          <i className="bx bxs-star text-[#F3CD03] "></i>
          <i className="bx bxs-star text-[#F3CD03] "></i>
          <p> 10 reviews</p>
        </div>
        <h5 className="text-2xl font-bold text-[#252B42] ">$1,139.33</h5>
        <div className="flex flex-row gap-2">
          <h6>Availability :</h6>
          <h6 className="text-[#23A6F0]">In Stock</h6>
        </div>
        <p className=" font-semibold w-[70%] ">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr className="mr-28"></hr>
        <div className="flex flex-row gap-2">
          <button class="w-5 h-5 bg-[#23A6F0] rounded-full "></button>
          <button class="w-5 h-5 bg-[#23856D] rounded-full "></button>
          <button class="w-5 h-5 bg-[#E77C40] rounded-full "></button>
          <button class="w-5 h-5 bg-[#23856D] rounded-full "></button>
        </div>
        <div className="flex gap-2">
          <button className="text-white bg-[#23A6F0] py-3 px-4 rounded">
            Select Options
          </button>
          <div className=" flex items-center text-3xl text-[#252B42] gap-3">
            <i className="bx bx-heart border border-1 rounded-full "></i>
            <i className="bx bx-cart-alt border border-1 rounded-full "></i>
            <i className="bx bx-show border border-1 rounded-full "></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
