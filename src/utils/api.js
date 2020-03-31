import { _getQuestions, _getUsers } from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      return { users, questions };
    }
  );
};
