import { AxiosInstance } from "../../api/api"
import { setRoles } from "../actions/globalActions";



export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/roles");
      const roles = response.data;
      dispatch(setRoles(roles));
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};

