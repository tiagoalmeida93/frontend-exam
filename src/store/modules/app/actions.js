import AppConstants from "./types";

export function AppRequest(param) {
  return {
    type: AppConstants.REQUEST,
    payload: param,
  };
}

export function AppRequestSuccess(data) {
  return {
    type: AppConstants.REQUEST_SUCCESS,
    payload: data,
  };
}

export function AppRequestFailed(error) {
  return {
    type: AppConstants.REQUEST_FAILED,
    payload: error,
  };
}
