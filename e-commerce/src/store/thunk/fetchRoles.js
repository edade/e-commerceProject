import { AxiosInstance } from "../../api/api"
import { setRoles } from "../actions/globalActions";



export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};

