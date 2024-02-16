import { AxiosInstance } from "../../api/api";
import { userAddAddress } from "../actions/userAction";

export const fetchUserAdress = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/user/address");
      dispatch(userAddAddress(response.data));
    } catch (error) {
      console.error("Error fetching adress:", error);
    }
  };
};
