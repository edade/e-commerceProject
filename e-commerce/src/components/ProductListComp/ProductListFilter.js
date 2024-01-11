import { useState } from "react";
import Form from "react-bootstrap/Form";

const ProductListFilter = ({
  onViewChange,
  onFilterChange,
  setViewType,
  searchTerm,
  onSortChange,
  sortType,
}) => {
  const handleGridClick = () => {
    setViewType("grid");
    if (onViewChange) {
      onViewChange("grid");
    }
  };

  const handleColumnClick = () => {
    setViewType("column");
    if (onViewChange) {
      onViewChange("column");
    }
  };

  return (
    <div className=" w-full font-['montserrat'] my-4 sm:py-4 ">
      <div className="flex lg:flex-row sm:flex-col sm:py-4 sm:h-28 justify-around container mx-auto p-4 h-12 items-center text-[#737373]">
        <div className="flex items-center font-bold text-sm sm:pt-4">
          <p>Showing all 112 results</p>
        </div>
        <div className="flex items-center font-normal text-sm gap-3 sm:py-4">
          <p>Wiews:</p>
          <button
            onClick={handleGridClick}
            className="flex items-center justify-center w-9 h-9 border rounded-md hover:bg-[#737373] transition-colors duration-300"
          >
            <img
              className="h-[1.2rem] w-[1.2rem] px-1"
              src="./img/productlistfilterbutton1.png"
              alt=""
            />
          </button>
          <button
            onClick={handleColumnClick}
            className="flex items-center justify-center w-9 h-9 border rounded-md hover:bg-[#737373] transition-colors duration-300"
          >
            <img
              className="h-[1.2rem] w-[1.2rem] px-1"
              src="./img/prodcuctlistfilterbutton2.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-row gap-2 sm:pb-4">
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchTerm}
              onChange={(e) => onFilterChange(e.target.value)}
            />
          </div>
          <div className=" flex flex-row font-normal text-sm border-light border-[#737373] rounded-md">
            <select
              onChange={(e) => onSortChange(e.target.value)}
              name="filter"
              id="filter"
            >
              <option value="Best">Best To Worst</option>
              <option value="Worst">Worst To Best</option>
              <option value="Highest">Highest Price</option>
              <option value="Lowest">Lowest Price</option>
            </select>
          </div>
          <button className="text-white bg-[#23A6F0] py-2 px-8 rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListFilter;
