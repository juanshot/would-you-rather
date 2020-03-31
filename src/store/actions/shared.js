import { getInitialData } from "../../utils/api";
import { fetchUsers } from "../actions/users";
import { fetchQuestions } from "../actions/questions";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
    });
  };
}
