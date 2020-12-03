import produce from "immer";
import AuthConstants from "./types";

const INITIAL_STATE = {
  isLogged: false,
  isLoading: false,
  user: {},
  message: "",
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case AuthConstants.REQUEST:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case AuthConstants.REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.isLogged = true;
        draft.user = payload;
      });
    case AuthConstants.REQUEST_FAILED:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.message = payload;
      });
    default:
      return state;
  }
}
