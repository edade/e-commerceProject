export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const toggleCheckbox = (productId) => {
  return {
    type: "TOGGLE_CHECKBOX",
    payload: productId,
  };
};

export const decreaseItemCount = (productId) => {
  return {
    type: "DECREASE_ITEM_COUNT",
    payload: productId,
  };
};

export const increaseItemCount = (productId) => {
  return {
    type: "INCREASE_ITEM_COUNT",
    payload: productId,
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

export const setAddressInfo = (address) => {
  return {
    type: "SET_ADDRESS_INFO",
    payload: address,
  };
};

export const addAddress = (newAddress) => {
  return {
    type: "ADD_ADDRESS",
    payload: newAddress,
  };
};

export const updateAddress = (id, updatedAddress) => {
  return {
    type: "UPDATE_ADDRESS",
    payload: { id, updatedAddress },
  };
};
