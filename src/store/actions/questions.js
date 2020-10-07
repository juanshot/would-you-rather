import { saveQuestion, saveQuestionAnswer } from "../../utils/api";
import { handleInitialData } from "./shared";
import { setIsLoading } from "./system";
import { FETCH_QUESTIONS } from "./types";

export const fetchQuestions = (questions) => ({
  type: FETCH_QUESTIONS,
  questions,
});

export function handleSaveQuestion(newQuestionReq) {
  setIsLoading(true);
  return (dispatch) => {
    return saveQuestion(newQuestionReq)
      .then(() => {
        dispatch(handleInitialData());
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export const handleSaveQuestionAnswer = (questionAnswerReq) => {
  return (dispatch) => {
    return saveQuestionAnswer(questionAnswerReq)
      .then(() => {
        dispatch(handleInitialData());
      })
      .catch((err) => console.error(err));
  };
};
