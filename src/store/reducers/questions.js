import { FETCH_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        ...state.questions
      };
    default:
      return state;
  }
}
