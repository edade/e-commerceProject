import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserAdress } from "../store/thunk/fetchUserAdress";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AddAddress } from "../store/thunk/AddAddress";
import { addAddress } from "../store/actions/shoppingCardAction";

const OrderPage = () => {
  const cartItems = useSelector((state) => state.shoppingCard.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const isLoading = useSelector((state) => state.user.loading);
  const [showBillingAddress, setShowBillingAddress] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedBillingId, setSelectedBillgingId] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityDistricts, setSelectedCityDistricts] = useState([]);
  const address = useSelector((state) => state.shoppingCard.address);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      dispatch(fetchUserAdress());
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

  const handleClose = () => setShowAddressForm(false);
  const handleShow = () => setShowAddressForm(true);

  useEffect(() => {
    fetch("https://turkiyeapi.dev/api/v1/provinces")
      .then((response) => response.json())
      .then((data) => {
        const cityData = data.data.map((city) => ({
          id: city.id,
          name: city.name,
        }));
        setCities(cityData);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleCityChange = async (event) => {
    const cityName = event.target.value;
    const cityId = await getCityId(cityName);

    if (cityId) {
      fetch(`https://turkiyeapi.dev/api/v1/provinces/${cityId}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedCity(cityId);
          const districtData = data.data.districts.map((district) => ({
            id: district.id,
            name: district.name,
          }));
          setSelectedCityDistricts(districtData);
        })
        .catch((error) =>
          console.error("Error fetching districts for selected city:", error)
        );
    } else {
      console.error("City ID not found.");
    }
  };

  const getCityId = async (cityName) => {
    try {
      const response = await fetch(
        `https://turkiyeapi.dev/api/v1/provinces?name=${cityName}`
      );
      const data = await response.json();
      const city = data.data.find((city) => city.name === cityName);
      if (city) {
        return city.id;
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      console.error("Error fetching city ID:", error);
      return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveAddress = () => {
    const addressData = { ...formData, user_id: userToken };
    dispatch(AddAddress(addressData, handleClose));
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
              <div className=" flex flex-row flex-wrap justify-around px-3 ">
                <div className="flex flex-col border-3 my-3 h-40 w-2/4 border-[#9bc8e3]-400 rounded-lg justify-center">
                  <Button
                    variant="outline-primary"
                    className="h-full"
                    onClick={handleShow}
                  >
                    <i class="fa-solid fa-plus "></i>
                    Yeni Adres Ekle
                  </Button>
                </div>
                {address.map((address) => (
                  <div
                    key={address.id}
                    className={`border-3 my-3 p-3 h-40 border-[#9bc8e3]-400 rounded-lg w-2/4 ${
                      address.id === selectedAddressId ? "border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedAddressId(address.id)}
                  >
                    <div className="flex flex-row justify-between">
                      <p>
                        <i className="fa-solid fa-user" /> {address.name}
                      </p>
                      <p>
                        <i className="fa-solid fa-phone" /> {address.phone}
                      </p>
                    </div>
                    <p className="text-left py-2">Adres: {address.address}</p>
                    <p className="text-left">
                      {address.city}/ {address.district}
                    </p>
                    <div className="text-end">
                      <button className="text-right py-2 text-blue-400">
                        Düzenle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {!showBillingAddress && (
              <div className="flex flex-col border-3 border-[#9bc8e3]-400 rounded-lg gap-3">
                <div className=" flex justify-between flex-row ">
                  <div>Fatura Adresi</div>
                </div>
                <div className=" flex flex-row flex-wrap justify-around px-3 ">
                  <div className="flex flex-col border-3 my-3 h-40 w-2/4 border-[#9bc8e3]-400 rounded-lg justify-center">
                    <Button
                      variant="outline-primary"
                      className="h-full"
                      onClick={handleShow}
                    >
                      <i class="fa-solid fa-plus "></i>
                      Yeni Adres Ekle
                    </Button>
                  </div>
                  {address.map((address) => (
                    <div
                      key={address.id}
                      className={`border-3 my-3 p-3 h-40 border-[#9bc8e3]-400 rounded-lg w-2/4 ${
                        address.id === selectedBillingId
                          ? "border-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedBillgingId(address.id)}
                    >
                      <div className="flex flex-row justify-between">
                        <p>
                          <i className="fa-solid fa-user" /> {address.name}
                        </p>
                        <p>
                          <i className="fa-solid fa-phone" /> {address.phone}
                        </p>
                      </div>
                      <p className="text-left py-2">Adres: {address.address}</p>
                      <p className="text-left">
                        {address.city}/ {address.district}
                      </p>
                    </div>
                  ))}
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
      <Modal show={showAddressForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Adres Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adres Başlığı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adres Başlığı"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ad"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Soyad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Soyad"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefon"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Şehir</Form.Label>
              <Form.Control
                as="select"
                name="city"
                value={formData.city}
                onChange={(e) => {
                  handleCityChange(e);
                  handleInputChange(e);
                }}
              >
                <option value="">Seçiniz</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>İlçe</Form.Label>
              <Form.Control
                as="select"
                name="district"
                value={formData.district}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              >
                <option value="">İlçe Seçiniz</option>
                {selectedCityDistricts.map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Mahalle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mahalle"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
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
    </div>
  );
};
export default OrderPage;
