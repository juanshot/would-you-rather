export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = users => {
  console.log("hello fetch users", users);
  return {
    type: FETCH_USERS,
    users
  };
};
