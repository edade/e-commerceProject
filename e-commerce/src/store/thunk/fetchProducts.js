import { AxiosInstance } from "../../api/api";

import {
  fetchMore,
  setFailed,
  setFetched,
  setFetching,
} from "../actions/productActions";

export const fetchProducts = (data) => async (dispatch) => {
  try {
    dispatch(setFetching());

    const response = await AxiosInstance.get("/products", {
      params: data,
    });

    dispatch(setFetched(response.data));
    console.log("products data :", response.data);
  } catch (error) {
    dispatch(setFailed(error.message));
  }
};
