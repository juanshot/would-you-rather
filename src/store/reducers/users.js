import { ADD_USER, FETCH_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
}
