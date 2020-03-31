import { FETCH_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action) {
    case FETCH_USERS:
      return {
        ...state,
        ...state.users
      };
    default:
      return state;
  }
}
