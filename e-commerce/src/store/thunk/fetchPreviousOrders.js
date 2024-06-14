import { AxiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import { userLogout } from "../actions/userAction";
import { setPreviousOrders } from "../actions/shoppingCardAction";

export const fetchPreviousOrders = () => async (dispatch) => {
  try {
    const response = await AxiosInstance.get("/order");
    dispatch(setPreviousOrders(response.data));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error("Session expired. Please login again.");
      dispatch(userLogout());
    } else {
      toast.error("Failed to fetch previous orders. ");
    }
  }
};
