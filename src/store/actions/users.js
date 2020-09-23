import { saveUser, removeUser } from "./../../utils/api";
import { setIsLoading } from "./system";
import { handleInitialData } from "./shared";
export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const handleSaveUser = (user) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(addUser(user));
  return saveUser(user)
    .then(() => {
      dispatch(handleInitialData());
      dispatch(setIsLoading(false));
    })
    .catch((err) => {
      dispatch(removeUser(user));
      console.error(err);
    });
};
