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

export const updateAddress = (address) => {
  return {
    type: "UPDATE_ADDRESS",
    payload: address,
  };
};

export const removeAddress = (id) => {
  return {
    type: "REMOVE_ADDRESS",
    payload: id,
  };
};

export const setCards = (cards) => {
  return {
    type: "SET_CARDS",
    payload: cards,
  };
};

export const addCard = (card) => {
  return {
    type: "ADD_CARD",
    payload: card,
  };
};

export const updateCard = (card) => {
  return {
    type: "UPDATE_CARD",
    payload: card,
  };
};

export const deleteCard = (cardId) => {
  return {
    type: "DELETE_CARD",
    payload: cardId,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};

export const setPreviousOrders = (orders) => ({
  type: "SET_PREVIOUS_ORDERS",
  payload: orders,
});

export const toggleOrderDetails = (orderId) => ({
  type: "TOGGLE_ORDER_DETAILS",
  payload: orderId,
});
