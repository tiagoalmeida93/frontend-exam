import { combineReducers } from "redux";
import AppReducer from "./modules/app";
import authReducer from "./modules/auth";

export default combineReducers({
  app: AppReducer,
  auth: authReducer,
});
