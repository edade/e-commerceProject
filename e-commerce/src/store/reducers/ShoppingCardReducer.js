const ShoppingCardInitial = {
  cart: [],
  address: [],
  cards: [],
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
          isChecked: true,
          product: {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            price: action.payload.price,
            images: action.payload.images[0].url,
          },
        };
        return { ...state, cart: [...state.cart, tempProduct] };
      }
    case "TOGGLE_CHECKBOX":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, isChecked: !item.isChecked }
            : item
        ),
      };
    case "DECREASE_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    case "INCREASE_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "SET_PAYMENT_INFO":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS_INFO":
      return { ...state, address: action.payload };

    // case "ADD_ADDRESS":
    //   const newAddress = action.payload;
    //   const updateAddresses = [...state.address, newAddress];

    //   return {
    //     ...state,
    //     address: updateAddresses,
    //   };
    case "ADD_ADDRESS":
      return {
        ...state,
        address: [...state.address, action.payload],
      };

    case "UPDATE_ADDRESS":
      const updatedAddresses = state.address.map((address) =>
        address.id === action.payload.id ? action.payload : address
      );
      return { ...state, address: updatedAddresses };

    case "REMOVE_ADDRESS":
      return {
        ...state,
        address: state.address.filter(
          (address) => address.id !== action.payload
        ),
      };
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.payload] };
    case "UPDATE_CARD":
      const updatedCards = state.cards.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
      return { ...state, cards: updatedCards };

    case "DELETE_CARD":
      const filteredCards = state.cards.filter(
        (card) => card.id !== action.payload
      );
      return { ...state, cards: filteredCards };

    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
