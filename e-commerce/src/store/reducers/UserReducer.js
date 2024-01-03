const userInitial = {
  token: null,
  name: null,
  email: null,
  gravatar: null,
  role_id: null,
  loading: false,
  error: null,
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
    default:
      return state;
  }
};
