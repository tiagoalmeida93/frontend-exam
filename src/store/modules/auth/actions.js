import AuthConstants from "./types";

export function AuthRequest(param) {
  return {
    type: AuthConstants.REQUEST,
    payload: param,
  };
}

export function AuthRequestSuccess(data) {
  return {
    type: AuthConstants.REQUEST_SUCCESS,
    payload: data,
  };
}

export function AuthRequestFailed(error) {
  return {
    type: AuthConstants.REQUEST_FAILED,
    payload: error,
  };
}
