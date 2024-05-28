import { AxiosInstance } from "../../api/api";
import { addCard } from "../actions/shoppingCardAction";

export const AddCard = (cardData, handleClose) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.post("/user/card", {
        card_no: cardData.card_no,
        expire_month: cardData.expire_month,
        expire_year: cardData.expire_year,
        name_on_card: cardData.name_on_card,
      });
      dispatch(addCard(response.data));
      handleClose();
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };
};
