import { AxiosInstance } from "../../api/api";
import { removeAddress } from "../actions/shoppingCardAction";

export const RemoveAddress = (id, handleClose) => {
  return async (dispatch) => {
    try {
      await AxiosInstance.delete(`/user/address/${id}`);
      dispatch(removeAddress(id));
      handleClose();
    } catch (error) {
      console.error("Address delete failed:", error);
    }
  };
};
