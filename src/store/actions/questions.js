import { saveQuestion, saveQuestionAnswer } from "../../utils/api";
import { handleInitialData } from "./shared";
import { setIsLoading } from "./system";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";

export const fetchQuestions = (questions) => ({
  type: FETCH_QUESTIONS,
  questions,
});

export function handleSaveQuestion(newQuestionReq) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return saveQuestion(newQuestionReq)
      .then(() => {
        dispatch(handleInitialData());
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export const handleSaveQuestionAnswer = (questionAnswerReq) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return saveQuestionAnswer(questionAnswerReq)
      .then(() => {
        dispatch(handleInitialData());
        dispatch(setIsLoading());
      })
      .catch((err) => console.error(err));
  };
};
