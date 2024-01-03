import { AxiosInstance, renewAxiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import { userChange, userLogout } from "../actions/userAction";
import gravatar from "gravatar";

export const fetchLogin = (formData, history) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.post("/login", formData);

      const userData = {
        email: response.data.email,
        name: response.data.name,
        role_id: response.data.role_id,
        token: response.data.token,
        gravatar: gravatar.url(response.data.email, {
          s: "200",
          r: "pg",
          d: "identicon",
        }),
      };

      dispatch(userChange(userData));

      toast.success("Congratulations! You've successfully logged in!");
      history.push("/");
    } catch (error) {
      console.error("Login failed!", error);
      toast.error("Login failed!");
    }
  };
};
