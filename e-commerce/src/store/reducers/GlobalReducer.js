const globalInitial = {
    roles: [],
    categories: [],
    theme: "",
    language: "",
  };
  
  export function GlobalReducer(state = globalInitial, action) {
    switch (action.type) {
      case "SET_ROLES":
        return { ...state, roles: action.payload };
      case "SET_CATEGORIES":
        return { ...state, categories: action.payload };
      case "SET_THEME":
        return { ...state, theme: action.payload };
      case "SET_LANGUAGE":
        return { ...state, language: action.payload };
      default:
        return state;
    }
  }