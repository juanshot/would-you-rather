export const FETCH_QUESTIONS = "FETCH_QUESTIONS";

export const fetchQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions
});
