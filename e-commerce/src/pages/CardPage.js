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

const CardPage = () => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const cards = useSelector((state) => state.shoppingCard.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
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
          <div className="flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg gap-3">
            <div className="flex justify-between flex-row">
              <div>Kayıtlı Kartlarım</div>
            </div>
            <div className="flex flex-row flex-wrap justify-around px-3">
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
                  className="border-3 my-3 p-3 h-40 border-[#9bc8e3]-400 rounded-lg w-2/4"
                >
                  <div className="flex flex-row justify-between">
                    <p> Kart Numarası: {card.card_no}</p>
                    <p>
                      Son Kullanma Tarihi: {card.expire_month}/
                      {card.expire_year}
                    </p>
                  </div>
                  <p className="text-left py-2">
                    Kart Sahibi: {card.name_on_card}
                  </p>
                  <div className="text-end">
                    <button
                      className="text-right py-2 text-blue-400"
                      onClick={() => handleEditCardClick(card)}
                    >
                      Düzenle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-3 border-[#9bc8e3]-400  rounded-lg w-[20%] py-2 h-2/5 text-sm">
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
      <AddCardForm
        show={showCardForm}
        handleClose={handleCloseAddCardForm}
        handleSaveCard={handleSaveCard}
      />
      <EditCardForm
        show={showEditForm}
        handleClose={handleCloseEditCardForm}
        card={formData}
        handleSaveCard={handleUpdateCard}
      />
    </div>
  );
};
export default CardPage;
