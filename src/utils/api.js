import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser,
  _removeUser,
} from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      return { users, questions };
    }
  );
};

export const saveQuestion = (question) => {
  return _saveQuestion(question);
};

export const saveQuestionAnswer = (questionAnswer) => {
  return _saveQuestionAnswer(questionAnswer);
};

export const saveUser = (user) => {
  return _saveUser(user);
};
export const removeUser = (user) => {
  return _removeUser(user);
};
