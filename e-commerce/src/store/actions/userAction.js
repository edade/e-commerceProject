export const userChange = (userData) => {
  return { type: "USER_LOGIN_SUCCESS", payload: userData };
};

export const userLogout = () => {
  localStorage.removeItem("token");
  return {
    type: "USER_LOGOUT",
  };
};

export const userInitialLoad = () => {
  return { type: "USER_INITIAL_LOAD" };
};

export const userAddAddress = (address) => {
  return { type: "USER_ADD_ADDRESS", payload: { address } };
};

export const userGetAddress = (addressData) => {
  return { type: "USER_GET_ADDRESS", payload: { addressData } };
};
