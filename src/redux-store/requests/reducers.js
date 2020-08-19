import { combineReducers } from "redux";

import { getDriversReducer } from "./drivers/reducers";

export const requestsReducers = combineReducers({
  drivers: getDriversReducer,
});
