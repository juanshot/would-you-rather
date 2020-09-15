import { IS_LOADING } from './../actions/system';

export default function system(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}