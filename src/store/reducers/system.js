import { IS_LOADING } from "./../actions/types";

export default function system(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
