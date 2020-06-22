import { userActionTypes } from "./user.types";
export const setcurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
