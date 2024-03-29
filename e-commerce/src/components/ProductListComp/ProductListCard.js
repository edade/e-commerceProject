import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/shoppingCardAction";
import { toast } from "react-toastify";

const ProductListCard = ({ viewType }) => {
  let products = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  const handleAddtoCard = (product) => {
    dispatch(addToCart(product));
  };

  // if (searchTerm && products.length > 0) {
  //   products = products.filter((p) => {
  //     return (
  //       p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       p.description.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  // }

  // if (sortType === "Lowest") {
  //   products = products.sort((a, b) => a.price - b.price);
  // } else if (sortType === "Highest") {
  //   products = products.sort((a, b) => b.price - a.price);
  // } else if (sortType === "Best") {
  //   products = products.sort((a, b) => b.rating - a.rating);
  // } else if (sortType === "Worst") {
  //   products = products.sort((a, b) => a.rating - b.rating);
  // }

  // if (categoryType && products.length > 0) {
  //   products = products.filter((p) => p.category_id == categoryType);
  // }

  return (
    <div className="font-['montserrat'] ">
      <div
        className={`flex flex-wrap justify-center gap-16 my-8 font-['montserrat'] ${
          viewType === "grid" ? "flex-row" : "flex-col"
        }`}
      >
        {products.map((item, index) => (
          <Link
            className="no-underline"
            to={`/product/${item.id}/${item.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            key={index}
          >
            <div
              className={`flex ${
                viewType === "grid"
                  ? "flex-col text-center lg:w-[15rem] sm:w-full lg:mx-0 sm:mx-8 mb-8 shadow-lg hover:shadow-slate-800 gap-3"
                  : "flex-row space-between gap-4"
              } `}
            >
              <img
                className="lg:w-full lg:h-full sm:w-full sm:h-full "
                src={item?.images?.[0]?.url}
                alt=""
              />
              <h5 className="text-[#252B42]  font-bold">{item.name}</h5>
              <div
                className="text-[#737373] text-sm font-bold py-2 px-2"
                href="#"
              >
                {item.description}
              </div>
              <h5 className="text-[#23856D] font-bold">${item.price} </h5>
              <div className="flex text-center justify-center py-2">
                <button class="w-4 h-4 bg-[#23A6F0] rounded-full mr-2"></button>
                <button class="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>
                <button class="w-4 h-4 bg-[#E77C40] rounded-full mr-2"></button>
                <button class="w-4 h-4 bg-[#23856D] rounded-full mr-2"></button>{" "}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddtoCard(item);
                  toast("Product added to basket!");
                }}
                className="text-white bg-[#23A6F0] py-3 px-4 rounded"
              >
                Add to Basket
              </button>
            </div>
          </Link>
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
