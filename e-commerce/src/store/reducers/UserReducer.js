const userInitial = {
  name: "",
  email: "",
  password: "",
  role_id: "",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "USER_CHANGE_NAME":
      return { ...state, name: action.payload };

    case "USER_CHANGE_SURNAME":
      return { ...state, surname: action.payload };

    case "USER_CHANGE_EMAIL":
      return { ...state, email: action.payload };

    case "USER_CHANGE_PASSWORD":
      return { ...state, password: action.payload };

    case "USER_CHANGE_ROLE":
      return { ...state, role_id: action.payload };

    default:
      return state;
  }
};
