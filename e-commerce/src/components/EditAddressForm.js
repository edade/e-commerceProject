import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { fetchUserAdress } from "../store/thunk/fetchUserAdress";
import { UpdateAddress } from "../store/thunk/UpdateAddress";

const EditAddressForm = ({ show, handleClose, address }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  useEffect(() => {
    if (address) {
      setFormData({
        id: address.id,
        title: address.title,
        name: address.name,
        surname: address.surname,
        phone: address.phone,
        city: address.city,
        district: address.district,
        neighborhood: address.neighborhood,
        address: address.address,
      });
    }
  }, [address]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveAddress = () => {
    dispatch(
      UpdateAddress(formData, () => {
        handleClose();
        dispatch(fetchUserAdress());
      })
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adres Düzenle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Adres Başlığı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adres Başlığı"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Ad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ad"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSurname">
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Soyad"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefon"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>Şehir</Form.Label>
            <Form.Control
              type="text"
              placeholder="Şehir"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDistrict">
            <Form.Label>İlçe</Form.Label>
            <Form.Control
              type="text"
              placeholder="İlçe"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNeighborhood">
            <Form.Label>Mahalle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mahalle"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adres"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="outline-primary" onClick={handleSaveAddress}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAddressForm;
