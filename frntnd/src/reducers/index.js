import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import ticket from "./ticket";
import performance from "./performance";

export default combineReducers({
  auth,
  message,
  ticket,
  performance
});
