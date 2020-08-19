import { requestsReducers } from "./requests/reducers";
import { combineReducers } from "redux";
import { applicationReducers } from "./application/reducers";
import { navigationReducers } from "./navigation/reducer";
import { alertReducer } from "./alert/reducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  requests: requestsReducers,
  application: applicationReducers,
  navigation: navigationReducers,
});
