import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserCards } from "../store/thunk/fetchUserCards";
import { AddCard } from "../store/thunk/AddCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AddCardForm from "../components/AddCardForm";
import EditCardForm from "../components/EditCardForm";
import { UpdateCard } from "../store/thunk/UpdateCard";
import { RemoveCard } from "../store/thunk/RemoveCard";
import { calculateInstallments } from "../components/CalculateInstallments";
import { CreateOrder } from "../store/thunk/CreateOrder";
import { toast } from "react-toastify";

const CardPage = () => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const cards = useSelector((state) => state.shoppingCard.cards);
  const selectedAddressId = useSelector(
    (state) => state.shoppingCard.selectedAddressId
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedInstallment, setSelectedInstallment] = useState(null);

  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      dispatch(fetchUserCards());
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

  const handleAddCardClick = () => {
    setShowCardForm(true);
  };

  const handleCloseAddCardForm = () => {
    setShowCardForm(false);
  };

  const handleEditCardClick = (card) => {
    setFormData(card);
    setShowEditForm(true);
  };

  const handleCloseEditCardForm = () => {
    setShowEditForm(false);
  };

  const handleSaveCard = (cardData) => {
    dispatch(
      AddCard(cardData, () => {
        setShowCardForm(false);
        dispatch(fetchUserCards());
      })
    );
  };

  const handleUpdateCard = (updatedCard) => {
    dispatch(
      UpdateCard(updatedCard, () => {
        setShowEditForm(false);
        dispatch(fetchUserCards());
      })
    );
  };

  const handleDeleteCard = (cardId) => {
    dispatch(
      RemoveCard(cardId, () => {
        dispatch(fetchUserCards());
      })
    );
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleInstallmentSelect = (installment) => {
    setSelectedInstallment(installment);
  };

  const handleCreateOrder = () => {
    const orderData = {
      address_id: selectedAddressId, // TODO
      order_date: new Date().toISOString(),
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: 325, // TODO
      price: calculateGrandTotalPrice(),
      products: cartItems.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.name,
      })),
    };

    dispatch(
      CreateOrder(orderData, () => {
        toast("Siparişiniz başarıyla oluşturuldu!");
        history.push("/previous-orders");
      })
    );
  };

  const totalAmount = calculateGrandTotalPrice();
  const defaultInstallmentOption = [
    { installment: 0, monthlyPayment: totalAmount, totalPayment: totalAmount },
  ];
  const paymentOptions = selectedCard
    ? calculateInstallments(totalAmount)
    : defaultInstallmentOption;

  return (
    <div>
      <Header />
      <div className="flex flex-row w-full gap-3 font-['montserrat'] font-semibold px-3">
        <div className="flex flex-col w-[80%] gap-3">
          <div className="flex flex-row">
            <div className="w-1/2 border-3 border-[#9bc8e3]-400 rounded-lg bg-[#f0f0f0] ">
              <Link to="/order">Adres Bilgilerim </Link>
            </div>
            <div className="w-1/2 border-3 border-[#9bc8e3]-400 rounded-lg bg-[#9bc8e3]">
              Kart Bilgilerim
            </div>
          </div>
          <div className="border-3 border-[#9bc8e3]-400 rounded-lg p-3">
            <i className="fa-solid fa-circle-exclamation text-[#23A6F0] pr-3"></i>
            Kayıtlı kart bilgilerinizi görüntüleyebilir ve yeni kart
            ekleyebilirsiniz.
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg w-2/3">
              <div className="flex text-lg font-bold justify-between flex-row">
                <div>Kayıtlı Kartlarım</div>
              </div>
              <div className="flex flex-row flex-wrap px-1">
                <div className="flex flex-col border-3 my-3 h-40 w-2/4 border-[#9bc8e3]-400 rounded-lg justify-center">
                  <Button
                    variant="outline-primary"
                    className="h-full"
                    onClick={handleAddCardClick}
                  >
                    <i className="fa-solid fa-plus "></i>
                    Yeni Kart Ekle
                  </Button>
                </div>
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={` relative border-3 my-3 p-3 h-40 border-[#9bc8e3]-400 rounded-lg w-1/2 ${
                      selectedCard && selectedCard.id === card.id
                        ? "border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleCardSelect(card)}
                  >
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right bottom, #69b3fd, #61a6fa, #5871f6, #4f50f1, #3d48ec)",
                      }}
                    >
                      <div className="">
                        <div className="flex justify-between items-center">
                          <i className="fa-brands fa-cc-visa text-white text-4xl"></i>
                        </div>

                        <p className="text-white text-left">
                          {card.name_on_card}
                        </p>
                        <div className="flex flex-col text-end ">
                          <div>
                            <p className="text-white text-lg mt-2">
                              **** **** **** {card.card_no.slice(-4)}
                            </p>
                          </div>
                          <div>
                            <p className="text-white">
                              {card.expire_month}/{card.expire_year}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                      <button
                        className="text-gray-800 mr-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCard(card.id);
                        }}
                      >
                        Sil
                      </button>
                      <button
                        className="text-black-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditCardClick(card);
                        }}
                      >
                        Düzenle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg p-3 w-1/3">
              <h3 className="text-lg font-bold">Taksit Seçenekleri</h3>
              <div className="grid grid-cols-4 text-right gap-4 border-t border-gray-300 py-2">
                <p className="font-bold col-span-1"></p>
                <p className="font-bold">Taksit Sayısı</p>
                <p className="font-bold">Aylık Ödeme</p>
                <p className="font-bold">Toplam Ödeme</p>
              </div>
              {paymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 border-t border-gray-300 py-2"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox text-center h-4 w-4 text-blue-600 rounded-full"
                    checked={selectedInstallment === option.installment}
                    onChange={() => handleInstallmentSelect(option.installment)}
                  />
                  <p>{option.installment}</p>
                  <p>{option.monthlyPayment} TL</p>
                  <p>{option.totalPayment} TL</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className=" border-3 border-[#9bc8e3]-400  rounded-lg w-[20%] py-2 h-2/5 text-sm"
          onClick={handleCreateOrder}
        >
          <button className="text-white bg-[#23A6F0] py-3 px-8 rounded mb-3">
            Siparişi Oluştur
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

          <button className="text-white bg-[#23A6F0] py-3 px-8 rounded mt-3">
            Siparişi oluştur
          </button>
        </div>
      </div>
      <AddCardForm
        show={showCardForm}
        handleClose={handleCloseAddCardForm}
        handleSaveCard={handleSaveCard}
      />
      {selectedCard && (
        <EditCardForm
          show={showEditForm}
          handleClose={handleCloseEditCardForm}
          card={selectedCard}
          handleSaveCard={handleUpdateCard}
        />
      )}
    </div>
  );
};
export default CardPage;
