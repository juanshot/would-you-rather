import { saveUser, removeUser } from "./../../utils/api";
import { setIsLoading } from "./system";
import { handleInitialData } from "./shared";
import { ADD_USER, FETCH_USERS } from "./types";

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
