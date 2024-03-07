import { AxiosInstance } from "../../api/api";
import { setAddressInfo } from "../actions/shoppingCardAction";

export const fetchUserAdress = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/user/address");
      dispatch(setAddressInfo(response.data));
    } catch (error) {
      console.error("Error fetching adress:", error);
    }
  };
};
