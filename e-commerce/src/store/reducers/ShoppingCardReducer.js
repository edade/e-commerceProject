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
        return { ...state, cart: [...state.cart, action.payload] };
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