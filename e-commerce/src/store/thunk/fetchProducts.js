import { AxiosInstance } from "../../api/api";
import { setProductList } from "../actions/productActions";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/products");
      dispatch(setProductList(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
