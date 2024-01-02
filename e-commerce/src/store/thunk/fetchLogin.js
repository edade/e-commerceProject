import { AxiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import {
  storeChangeName,
  storeChangeEmail,
  storeChangePassword,
  storeChangeRole,
} from "../actions/userAction";

export const fetchLogin = (formData, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_LOGIN_START" });

      const response = await AxiosInstance.post("/login", formData);

      const userData = {
        email: response.data.email,
        name: response.data.name,
        role_id: response.data.role_id,
        token: response.data.token,
      };

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: userData,
      });

      dispatch(storeChangeName(userData.name));
      dispatch(storeChangeEmail(userData.email));
      dispatch(storeChangePassword(response.data.password));
      dispatch(storeChangeRole(userData.role_id));

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
