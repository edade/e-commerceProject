import { AxiosInstance } from "../../api/api"
import { toast } from 'react-toastify';

export const fetchLogin = (formData, history) => {
  return async (dispatch) => {
    try {
   
      dispatch({ type: "USER_LOGIN_START" });

      const response = await AxiosInstance.post("/login", formData);

    
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data,
      });

      console.log("Login successful", response);
      toast.success("Congratulations! You've successfully logged in!");
      history.push("/");
    } catch (error) {
  
      dispatch({
        type: "USER_LOGIN_FAILURE",
        payload: error.message,
      });

      console.error("Login failed!", error);
      toast.error("Login failed!");
    } finally {
     
      dispatch({ type: "USER_LOGIN_END" });
    }
  };
};