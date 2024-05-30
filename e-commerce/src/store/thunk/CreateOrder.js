import { AxiosInstance } from "../../api/api";
import { resetCart } from "../actions/shoppingCardAction";

export const CreateOrder = (orderData, onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.post("/order", orderData);
      onSuccess();
      dispatch(resetCart());
    } catch (error) {
      console.error("Sipariş oluşturma başarısız:", error);
    }
  };
};
