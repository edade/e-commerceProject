import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
} from "../store/actions/shoppingCardAction";
import { useHistory } from "react-router-dom";
import Header from "../layout/Header";
import { useEffect } from "react";
const ShopCardPage = () => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecreaseItemCount = (productId) => {
    const currentItem = cartItems.find((item) => item.product.id === productId);
    if (currentItem.count > 1) {
      dispatch(decreaseItemCount(productId));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const handleIncreaseItemCount = (productId) => {
    dispatch(increaseItemCount(productId));
  };

  return (
    <div className=" flex flex-col gap-5 justify-center items-center font-['montserrat'] font-semibold ">
      <Header />
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div className="w-11/12">
          {cartItems.map((item, index) => (
            <div className="border-3 border-[#9bc8e3]-400 rounded-lg  h-1/4 mb-2 p-2">
              <i class="fa-solid fa-cube"> Kargo Bedava</i>
              <hr></hr> <br></br>
              <div
                key={index}
                className="  flex flex-row items-center justify-around px-4"
              >
                <img
                  className="max-w-[130px] max-h-[130px] mr-2"
                  src={item?.product?.images}
                  alt={item?.product.id}
                />

                <p className="overflow-hidden text-left">
                  {item?.product?.name}
                  <span className="font-normal overflow-hidden block max-w-[500px] whitespace-nowrap overflow-ellipsis">
                    {item?.product?.description}
                  </span>
                </p>
                <p className="text-[#23A6F0] font-bold">
                  Fiyat: ${item.product.price * item.count}
                </p>
                <div class="flex gap-x-3 bg-gray-100 border rounded-md items-center">
                  <button
                    class="bg-[#23A6F0] px-2 py-1 rounded-l-md"
                    onClick={() => handleDecreaseItemCount(item.product.id)}
                  >
                    -
                  </button>
                  {item.count}
                  <button
                    class="bg-[#23A6F0] px-2 py-1 rounded-r-md"
                    onClick={() => handleIncreaseItemCount(item.product.id)}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveItem(item.product.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
          <p>
            Toplam: $
            {cartItems
              .reduce(
                (total, item) => total + item?.product?.price * item.count,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShopCardPage;
