import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserAdress } from "../store/thunk/fetchUserAdress";
import { useState } from "react";

const OrderPage = () => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const userAddresses = useSelector((state) => state.user.addresses);
  const isLoading = useSelector((state) => state.user.loading);
  const [showBillingAddress, setShowBillingAddress] = useState(true);

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      dispatch(fetchUserAdress);
    }
  }, [dispatch, history, userToken]);

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
    <div>
      <Header />
      <div>
        <div className="flex flex-row w-full gap-3 font-['montserrat'] font-semibold px-3">
          <div className="flex flex-col w-[80%] gap-3">
            <div className="flex flex-row">
              <div className=" w-1/2 border-3 border-[#9bc8e3]-400 rounded-lg bg-[#9bc8e3]">
                Adres Bilgilerim
              </div>
              <div className="w-1/2 border-3 border-[#9bc8e3]-400 rounded-lg">
                Kart Bilgilerim
              </div>
            </div>
            <div className="border-3 border-[#9bc8e3]-400 rounded-lg">
              <i class="fa-solid fa-circle-exclamation text-[#23A6F0] pr-3 "></i>
              Kurumsal faturalı alışveriş yapmak için "Faturamı aynı adrese
              gönder" tikini kaldırın ve fatura adresi olarak kayıtlı kurumsal
              fatura adresinizi seçin.{" "}
            </div>
            <div className="flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg gap-3">
              <div className=" flex justify-between flex-row ">
                <div>Teslimat Adresi</div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    checked={showBillingAddress}
                    onChange={() => setShowBillingAddress(!showBillingAddress)}
                  />
                  <div>Faturamı aynı adrese gönder</div>
                </div>
              </div>
              <div className=" flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg px-5 justify-center pb-4 mb-4">
                Yeni adres ekle
                <i class="fa-solid fa-plus "></i>
              </div>
            </div>
            {!showBillingAddress && (
              <div className="flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg gap-3">
                <div className="text-left">Fatura Adresi</div>

                <div className=" flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg px-5 justify-center pb-4 mb-4">
                  Yeni adres ekle
                  <i class="fa-solid fa-plus "></i>
                </div>
              </div>
            )}
          </div>
          <div className="border-3 border-[#9bc8e3]-400 rounded-lg w-[20%] py-2 h-2/5 text-sm">
            <button className="text-white bg-[#23A6F0] py-3 px-4 rounded mb-3">
              Kaydet ve Devam Et
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
              <button className="text-white bg-[#23A6F0] py-3 px-4 rounded mt-3">
                Kaydet ve Devam Et
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
