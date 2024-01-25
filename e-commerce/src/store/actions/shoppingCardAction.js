export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const setPaymentInfo = (paymentInfo) => {
  return {
    type: "SET_PAYMENT_INFO",
    payload: paymentInfo,
  };
};

export const setAddressInfo = (addressInfo) => {
  return {
    type: "SET_ADDRESS_INFO",
    payload: addressInfo,
  };
};
