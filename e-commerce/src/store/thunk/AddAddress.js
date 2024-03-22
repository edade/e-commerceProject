import { AxiosInstance, renewAxiosInstance } from "../../api/api";
import { addAddress } from "../actions/shoppingCardAction";

export const AddAddress = (addressData, handleClose) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.post("/user/address", addressData);
      dispatch(addAddress(response.data));
      handleClose();
    } catch (error) {
      console.error("Address save failed:", error);
    }
  };
};
