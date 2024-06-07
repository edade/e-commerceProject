const userInitial = {
  token: null,
  name: null,
  email: null,
  gravatar: null,
  role_id: null,
  loading: false,
  error: null,
  addresses: [],
  selectedAddressId: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload, loading: false, error: null };
    case "USER_LOGOUT":
      localStorage.removeItem("token");
      return userInitial;
    case "USER_INITIAL_LOAD":
      return { ...state, loading: false };

    case "USER_ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload.address],
      };

    case "USER_GET_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload.addressData],
      };
    case "USER_UPDATE_ADDRESS":
      return state;
    case "USER_DELETE_ADDRESS":
      return state;

    case "SET_SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddressId: action.payload,
      };
    default:
      return state;
  }
};
