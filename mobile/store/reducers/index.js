import { combineReducers } from "redux";
import userReducer from "./userReducers";
import uiReducer from "./uiReducers";

const rootReducer = combineReducers({
  user:userReducer,
  ui:uiReducer
});

export default rootReducer;