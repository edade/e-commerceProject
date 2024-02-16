import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
  toggleCheckbox,
} from "../store/actions/shoppingCardAction";
import { useHistory, Link } from "react-router-dom";
import Header from "../layout/Header";
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

  const handleToggleCheckbox = (productId) => {
    dispatch(toggleCheckbox(productId));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.product.price * item.count;
      }
    });
    return totalPrice.toFixed(2);
  };

  const isFreeShipping = () => {
    return calculateTotalPrice() > 150;
  };

  const calculateShippingFee = () => {
    return isFreeShipping() ? 0 : 29.99;
  };

  const calculateGrandTotalPrice = () => {
    return (parseFloat(calculateTotalPrice()) + calculateShippingFee()).toFixed(
      2
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-row w-full  font-['montserrat'] font-semibold ">
        <div className=" flex flex-col gap-5 w-[80%] justify-center items-center font-['montserrat'] font-semibold ">
          {cartItems.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <div className="w-11/12">
              {cartItems.map((item, index) => (
                <div className="border-3 border-[#9bc8e3]-400 rounded-lg mb-2 p-2">
                  <i class="fa-solid fa-cube"> Kargo Bedava</i>
                  <hr></hr> <br></br>
                  <div
                    key={index}
                    className="  flex flex-row items-center justify-around px-4"
                  >
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => handleToggleCheckbox(item.product.id)}
                    />
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
              <p>Toplam: ${calculateTotalPrice()}</p>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-3 w-[20%] border-3 border-[#9bc8e3]-400 rounded-lg  h-2/5 mb-2 p-2 text-sm">
          <button className="text-white bg-[#23A6F0] py-3 px-4 rounded">
            SİPARİŞİ ONAYLA
          </button>
          <p className="text-left">SİPARİŞ ÖZETİ</p>
          <div className="flex flex-row justify-between">
            <div>Ürünün Toplamı</div>
            <div>${calculateTotalPrice()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Kargo Toplam</div>
            <div>$29.99</div>
          </div>
          {calculateTotalPrice() > 150 && (
            <div className="flex flex-row justify-between">
              <div>150$ üzeri Kargo Bedava</div>
              <div className="text-[red]">-$29.99</div>
            </div>
          )}
          <hr></hr>
          <div className="flex flex-row justify-between">
            <div>Toplam</div>
            <div>${calculateGrandTotalPrice()}</div>
          </div>
          <Link to="/order">
            <button className="text-white bg-[#23A6F0] py-3 px-4 rounded">
              SİPARİŞİ ONAYLA
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopCardPage;
