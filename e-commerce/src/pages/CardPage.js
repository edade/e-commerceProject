import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserCards } from "../store/thunk/fetchUserCards";
import { AddCard } from "../store/thunk/AddCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CardPage = () => {
  const cards = useSelector((state) => state.shoppingCard.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const [showCardForm, setShowCardForm] = useState(false);
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

  const handleClose = () => setShowCardForm(false);
  const handleShow = () => setShowCardForm(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveCard = () => {
    const cardData = { ...formData };
    dispatch(
      AddCard(cardData, () => {
        handleClose();
        dispatch(fetchUserCards());
      })
    );
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Kart Bilgilerim</h1>
        <Button variant="outline-primary" onClick={handleShow}>
          Yeni Kart Ekle
        </Button>
        <div>
          {cards.map((card) => (
            <div key={card.id}>
              <p>Kart Numarası: {card.cardNumber}</p>
              <p>Kart Sahibi: {card.cardHolderName}</p>
              <p>Son Kullanma Tarihi: {card.expiryDate}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showCardForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Kart Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCardNo">
              <Form.Label>Kart Numarası</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kart Numarası"
                name="card_no"
                value={formData.card_no}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpireMonth">
              <Form.Label>Son Kullanma Tarihi (Ay)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ay"
                name="expire_month"
                value={formData.expire_month}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpireYear">
              <Form.Label>Son Kullanma Tarihi (Yıl)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Yıl"
                name="expire_year"
                value={formData.expire_year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNameOnCard">
              <Form.Label>Kart Üzerindeki İsim</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kart Üzerindeki İsim"
                name="name_on_card"
                value={formData.name_on_card}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="outline-primary" onClick={handleSaveCard}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CardPage;
