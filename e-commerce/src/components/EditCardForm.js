import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UpdateCard } from "../store/thunk/UpdateCard";
import { fetchUserCards } from "../store/thunk/fetchUserCards";

const EditCardForm = ({ show, handleClose, card }) => {
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (card) {
      setFormData({
        card_no: card.card_no,
        expire_month: card.expire_month,
        expire_year: card.expire_year,
        name_on_card: card.name_on_card,
        id: card.id,
      });
    }
  }, [card]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      UpdateCard(formData, () => {
        handleClose();
        dispatch(fetchUserCards());
      })
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kart Düzenle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>KART NUMARASI</Form.Label>
            <Form.Control
              type="text"
              placeholder="Geçerli Kart Numarası"
              name="card_no"
              value={formData.card_no}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <div className="flex justify-between mb-3">
            <Form.Group>
              <Form.Label>SON KULLANMA TARİHİ</Form.Label>
              <div className="flex">
                <Form.Control
                  type="text"
                  placeholder="MM"
                  name="expire_month"
                  value={formData.expire_month}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="YY"
                  name="expire_year"
                  value={formData.expire_year}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>KART SAHİBİ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kart Üzerindeki İsim"
              name="name_on_card"
              value={formData.name_on_card}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            className="w-full mb-2"
          >
            Kaydet
          </Button>
          <Button
            variant="outline-secondary"
            onClick={handleClose}
            className="w-full"
          >
            İptal
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCardForm;
