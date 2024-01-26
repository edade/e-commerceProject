import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/shoppingCardAction";
import { Link } from "react-router-dom";

const CartDropdown = ({ onClose }) => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div
      className="absolute z-50 top-24 right-10 mt-2 bg-white rounded-lg shadow-md overflow-hidden font-['montserrat'] "
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="pointer-events-auto">
        <div className="flex max-h-96 flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Sepetim ({cartItems.length} ürün)
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-8">
              <div className="flow-root">
                {" "}
                {cartItems.length === 0 ? (
                  <p>No products in basket</p>
                ) : (
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((item, index) => (
                      <li key={index} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item?.product?.images}
                            alt={item?.product.id}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{item?.product?.name}</a>
                              </h3>
                              <p className="ml-4 text-xl text-[#23856D]">
                                ${item.product.price * item.count}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Adet: {item.count}</p>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-[#737373] hover:text-[#9bc8e3]"
                                onClick={() =>
                                  handleRemoveFromCart(item.product.id)
                                }
                              >
                                <i class="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-3 mt-2 mb-2 gap-3">
          <Link to="/cart">
            <button className="text-white bg-[#9bc8e3] py-3 px-4 rounded">
              Go to Shop Cart
            </button>
          </Link>
          <button className="text-white bg-[#9bc8e3] py-3 px-4 rounded">
            Complete the Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
