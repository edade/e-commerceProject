import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreviousOrders } from "../store/thunk/fetchPreviousOrders";
import { Table, Collapse, Button } from "react-bootstrap";
import Header from "../layout/Header";
import { useHistory } from "react-router-dom";
const PreviousOrdersPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const previousOrders = useSelector(
    (state) => state.shoppingCard.previousOrders
  );

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      dispatch(fetchPreviousOrders(userToken));
    }
  }, [dispatch, history, userToken]);

  const handleToggleDetails = (orderId) => {
    dispatch({ type: "TOGGLE_ORDER_DETAILS", payload: orderId });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!previousOrders) {
    return (
      <div>
        <Header />
        <h1>Previous Orders</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold mb-4">Previous Orders</h1>
      <div id="accordion">
        {previousOrders.length > 0 ? (
          previousOrders.map((order, index) => (
            <div key={order.id} className="border rounded-lg mb-2">
              <div
                className="bg-gray-200 p-4 justify-between"
                id={`heading${index}`}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    <div>Order ID: {order.id}</div>
                    <div>Total: {order.price} </div>
                  </button>
                </h5>
              </div>

              {openIndex === index && (
                <div
                  id={`collapse${index}`}
                  aria-labelledby={`heading${index}`}
                >
                  <div className="bg-white p-4">
                    <h5 className="font-bold">Card Information</h5>
                    <p>Card No: {order.card_no}</p>
                    <p>Card Holder: {order.card_name}</p>
                    <p>
                      Expire Date: {order.card_expire_month}/
                      {order.card_expire_year}
                    </p>
                    <h5 className="font-bold">Address Information</h5>
                    <p>Address ID: {order.address_id}</p>
                    <h5 className="font-bold">Products</h5>
                    <ul>
                      {order.products.map((product) => (
                        <li key={product.id} className="mb-2">
                          <img
                            src={product.images[0].url}
                            alt={product.name}
                            className="w-16 h-16 mr-4"
                          />
                          <div>
                            <p>Product Name: {product.name}</p>
                            <p>Product Description: {product.description}</p>
                            <p>Count: {product.count}</p>
                            <p>Price: {product.price}</p>
                            <p>image {product.images.url}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No previous orders found.</p>
        )}
      </div>
    </div>
  );
};

export default PreviousOrdersPage;
