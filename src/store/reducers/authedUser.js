import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action) {
    case SET_AUTHED_USER:
      return action.id;

    default:
      return state;
  }
}
