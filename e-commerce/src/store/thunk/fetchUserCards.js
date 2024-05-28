import { AxiosInstance } from "../../api/api";
import { setCards } from "../actions/shoppingCardAction";

export const fetchUserCards = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/user/card");
      dispatch(setCards(response.data));
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
};
