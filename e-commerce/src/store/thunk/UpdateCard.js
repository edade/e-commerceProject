import { AxiosInstance } from "../../api/api";
import { updateCard } from "../actions/shoppingCardAction";

export const UpdateCard = (cardData, handleClose) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.put(`/user/card`, cardData);
      dispatch(updateCard(response.data));
      handleClose();
    } catch (error) {
      console.error("Card update failed:", error);
    }
  };
};
