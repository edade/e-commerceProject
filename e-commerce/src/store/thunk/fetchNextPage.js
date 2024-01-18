import { AxiosInstance } from "../../api/api";
import { fetchMore } from "../actions/productActions";

export const fetchNextPage = (data) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/products", {
        params: data,
      });

      dispatch(fetchMore(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
