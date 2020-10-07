import { getInitialData } from "../../utils/api";
import { fetchUsers } from "../actions/users";
import { fetchQuestions } from "../actions/questions";
import { setIsLoading } from "./system";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return getInitialData().then(({ users, questions }) => {
      dispatch(setIsLoading(false));
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
    });
  };
}
