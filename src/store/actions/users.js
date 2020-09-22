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
