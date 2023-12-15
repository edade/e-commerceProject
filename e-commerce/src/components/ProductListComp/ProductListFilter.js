const ProductListFilter = () => {
  return (
    <div className=" w-full font-['montserrat'] my-4 ">
      <div className="flex justify-around container mx-auto p-4 h-12 items-center text-[#737373]">
        <div className="flex items-center font-bold text-sm ">
          <p>Showing all 112 results</p>
        </div>
        <div className="flex items-center font-normal text-sm gap-3">
          <p>Wiews:</p>
          <button class="flex items-center justify-center w-9 h-9 border rounded-md hover:bg-[#737373] transition-colors duration-300">
            <img
              className="h-[1.2rem] w-[1.2rem] px-1"
              src="./img/productlistfilterbutton1.png"
              alt=""
            />
          </button>
          <button class="flex items-center justify-center w-9 h-9 border rounded-md hover:bg-[#737373] transition-colors duration-300">
            <img
              className="h-[1.2rem] w-[1.2rem] px-1"
              src="./img/prodcuctlistfilterbutton2.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <div className=" flex flex-row font-normal text-sm border-light border-[#737373] rounded-md">
            <select name="filter" id="filter">
              <option value="Popularity">Popularity</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Best Seller">Best Seller</option>
            </select>
          </div>
          <button className="text-white bg-[#23A6F0] py-4 px-10 rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListFilter;
