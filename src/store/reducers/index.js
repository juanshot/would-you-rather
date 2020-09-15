import { combineReducers } from "redux";

import authedUser from "./authedUser";
import questions from "./questions";
import system from "./system";
import users from "./users";

export default combineReducers({
  authedUser,
  questions,
  system,
  users
});
