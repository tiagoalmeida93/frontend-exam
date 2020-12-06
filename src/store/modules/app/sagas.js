import { put, all, takeLatest, delay } from "redux-saga/effects";

import { AppRequestSuccess, AppRequestFailed } from "./actions";
import AppConstants from "./types";

function* appLoad(action) {
  try {
    yield delay(2000);
    yield put(AppRequestSuccess(action.payload));
  } catch (error) {
    yield put(AppRequestFailed(error));
  }
}

export default all([takeLatest(AppConstants.REQUEST, appLoad)]);
