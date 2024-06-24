import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreviousOrders } from "../store/thunk/fetchPreviousOrders";
import Header from "../layout/Header";
import { useHistory } from "react-router-dom";
const PreviousOrdersPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.user.token);
  const previousOrders = useSelector(
    (state) => state.shoppingCard.previousOrders
  );
  const addresses = useSelector((state) => state.shoppingCard.address);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      dispatch(fetchPreviousOrders(userToken));
    }
  }, [dispatch, history, userToken]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedOrders = [...previousOrders].sort(
    (a, b) => new Date(b.order_date) - new Date(a.order_date)
  );

  const getAddressDetails = (addressId) => {
    return addresses.find((address) => address.id === addressId) || {};
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
    <div className="font-['montserrat']  ">
      <Header />
      <h1 className="text-xl font-bold mb-4">Previous Orders</h1>
      <div id="accordion">
        {sortedOrders.length > 0 ? (
          sortedOrders.map((order, index) => {
            const addressDetails = getAddressDetails(order.address_id);
            return (
              <div key={order.id} className="border rounded-lg mb-2">
                <div
                  className="bg-gray-200 p-4"
                  id={`heading${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="mb-0 flex justify-between text-left font-bold text-black cursor-pointer">
                    <div>Order ID: {order.id}</div>
                    <div>Total Price: {order.price} TRY </div>
                  </h5>
                </div>

                {openIndex === index && (
                  <div
                    id={`collapse${index}`}
                    aria-labelledby={`heading${index}`}
                  >
                    <div className="bg-white p-4 border">
                      <h5 className="font-bold text-lg border-b pb-2 mb-4">
                        Payment Information
                      </h5>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 border-r pr-4">
                          <p className="font-semibold mb-2">Card Information</p>
                          <div className="space-y-2">
                            <p className="flex justify-between">
                              <span className="font-semibold">Card No:</span>
                              <span>{order.card_no}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold">
                                Card Holder:
                              </span>
                              <span>{order.card_name}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold">
                                Expire Date:
                              </span>
                              <span>
                                {order.card_expire_month}/
                                {order.card_expire_year}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <p className="font-semibold mb-2">
                            Address Information
                          </p>
                          <div className="space-y-2">
                            <p className="flex justify-between">
                              <span className="font-semibold">Name </span>
                              <span>
                                {addressDetails.name} {addressDetails.surname}
                              </span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold">
                                Phone Number{" "}
                              </span>
                              <span>{addressDetails.phone}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold">
                                District/City{" "}
                              </span>
                              <span>
                                {addressDetails.district}/ {addressDetails.city}
                              </span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-semibold">
                                Adres detail
                              </span>
                              <span>{addressDetails.address}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-bold">Products</h5>
                      <div className="space-y-4">
                        {order.products.map((product, index) => (
                          <div
                            key={product.id}
                            className="border-3 border-[#9bc8e3]-400 rounded-lg mb-2 p-2"
                          >
                            <div className="flex flex-row items-center justify-between px-4">
                              <img
                                className="w-20 h-20 mr-4"
                                src={product.images[0]?.url}
                                alt={product.name}
                              />
                              <div className="flex flex-col flex-grow">
                                <p className="font-semibold">{product.name}</p>
                                <p className="text-sm">{product.description}</p>
                              </div>
                              <div className="flex flex-col items-end">
                                <p className="text-[#23A6F0] font-bold">
                                  ${product.price * product.count}
                                </p>
                                <p className="text-sm">
                                  Count: {product.count}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p>No previous orders found.</p>
        )}
      </div>
    </div>
  );
};

export default PreviousOrdersPage;
