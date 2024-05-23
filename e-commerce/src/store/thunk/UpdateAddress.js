import { AxiosInstance, renewAxiosInstance } from "../../api/api";
import { updateAddress } from "../actions/shoppingCardAction";

// export const UpdateAddress = (id, updatedAddress) => {
//   return async (dispatch) => {
//     try {
//       const response = await AxiosInstance.put(
//         `/user/address/${id}`,
//         updatedAddress
//       );
//       dispatch(updateAddress(id, response.data)); // Redux state'i güncelle
//     } catch (error) {
//       console.error("Address update failed:", error);
//     }
//   };
// };

export const UpdateAddress = (addressData, handleClose) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.put(`/user/address`, addressData);
      dispatch(updateAddress(response.data));
      handleClose();
    } catch (error) {
      console.error("Address update failed:", error);
    }
  };
};
