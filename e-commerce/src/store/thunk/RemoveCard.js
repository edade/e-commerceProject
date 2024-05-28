import { AxiosInstance } from "../../api/api";
import { deleteCard } from "../actions/shoppingCardAction";

export const RemoveCard = (cardId, handleClose) => {
  return async (dispatch) => {
    try {
      await AxiosInstance.delete(`/user/card/${cardId}`);
      dispatch(deleteCard(cardId));
      handleClose();
    } catch (error) {
      console.error("Card delete failed:", error);
    }
  };
};
