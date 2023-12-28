export const storeChangeName = (name) => {
    return { type: "USER_CHANGE_NAME", payload: name };
  };

  export const storeChangeEmail = (mail) => {
    return { type: "USER_CHANGE_EMAIL", payload: mail };
  };
  export const storeChangePassword = (password) => {
    return { type: "USER_CHANGE_PASSWORD", payload: password };
  };
  export const storeChangeRole = (role) => {
    return { type: "USER_CHANGE_ROLE", payload: role };
  };
