import { combineReducers } from "redux";
import uiReducer from "./uiReducers";

const rootReducer = combineReducers({
  ui:uiReducer
});

export default rootReducer;