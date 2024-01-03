import { AxiosInstance } from "../../api/api"
import { setCategories} from "../actions/globalActions";



export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/categories");
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
};

