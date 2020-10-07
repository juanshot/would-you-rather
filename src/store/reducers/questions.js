import { FETCH_QUESTIONS } from "../actions/types";

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
