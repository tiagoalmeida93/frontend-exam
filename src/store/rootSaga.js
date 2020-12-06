import { all } from "redux-saga/effects";

import app from "./modules/app/sagas";
import auth from "./modules/auth/sagas";

export default function* rootSaga() {
  return yield all([app, auth]);
}
