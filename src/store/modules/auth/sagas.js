import { put, all, takeLatest, delay } from "redux-saga/effects";

import { AuthRequestSuccess, AuthRequestFailed } from "./actions";
import AuthConstants from "./types";

function* getAuth(action) {
  try {
    yield delay(2500);
    yield put(AuthRequestSuccess(action.payload));
  } catch (error) {
    yield put(AuthRequestFailed(error));
  }
}

export default all([takeLatest(AuthConstants.REQUEST, getAuth)]);
