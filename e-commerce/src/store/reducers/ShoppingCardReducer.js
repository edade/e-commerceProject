const ShoppingCardInitial = {
  cart: [
    { count: "", product: { id: "" } },
    { count: "", product: { id: "" } },
  ],
  payment: {},
  address: {},
};

export const ShoppingCardReducer = (state = ShoppingCardInitial, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (itemIndex >= 0) {
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === itemIndex ? { ...item, count: item.count + 1 } : item
          ),
        };
      } else {
        const tempProduct = {
          count: 1,
          product: { id: action.payload.id },
        };
        return { ...state, cart: [...state.cart, tempProduct] };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "SET_PAYMENT_INFO":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS_INFO":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
