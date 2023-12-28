export const storeChangeName = (name) => {
  return { type: "STORE_CHANGE_NAME", payload: name };
};
export const storeChangeSurname = (surname) => {
  return { type: "STORE_CHANGE_SURNAME", payload: surname };
};
export const storeChangeEmail = (mail) => {
  return { type: "STORE_CHANGE_EMAIL", payload: mail };
};
export const storeChangePassword = (password) => {
  return { type: "STORE_CHANGE_PASSWORD", payload: password };
};
export const storeChangeRole = (role) => {
  return { type: "STORE_CHANGE_ROLE", payload: role };
};
export const storeChangeStoreName = (storeName) => {
  return { type: "STORE_CHANGE_STORE_NAME", payload: storeName };
};
export const storePhoneNumber = (phoneNumber) => {
  return { type: "STORE_PHONE_NUMBER", payload: phoneNumber };
};
export const storeTaxId = (taxId) => {
  return { type: "STORE_TAX_ID", payload: taxId };
};
export const storeIban = (iban) => {
  return { type: "STORE_IBAN", payload: iban };
};