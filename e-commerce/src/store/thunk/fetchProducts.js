import { AxiosInstance } from "../../api/api";
import { setFetchState, setProductList } from "../actions/productActions";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

export const fetchProducts = (category, filter, sort) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState(FETCH_STATES.fetching));
      const response = await AxiosInstance.get(
        `/products?category=${category}&filter=${filter}&sort=${sort}`
      );

      dispatch(setProductList(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      dispatch(setFetchState(FETCH_STATES.fetched));
    }
  };
};
