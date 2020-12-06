import produce from "immer";
import AppConstants from "./types";

const INITIAL_STATE = {
  isLoading: false,
  message: "",
};

export default function AppReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case AppConstants.REQUEST:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case AppConstants.REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });
    case AppConstants.REQUEST_FAILED:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.message = payload;
      });
    default:
      return state;
  }
}
