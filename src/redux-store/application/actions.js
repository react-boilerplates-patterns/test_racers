import { createAction } from "@helpers";

export const ApplicationActionTypes = {
  SET_APPLICATION_LOADING: "SET_APPLICATION_LOADING",
  APP_INIT_REQUEST: "APP_INIT_REQUEST",
  APP_INIT: "APP_INIT",
  APP_INIT_FAILURE: "APP_INIT_FAILURE",
};

export const applicationActions = {
  setLoading: () =>
    createAction(ApplicationActionTypes.SET_APPLICATION_LOADING),
  appInitRequest: () => createAction(ApplicationActionTypes.APP_INIT_REQUEST),
  appInit: (data) => createAction(ApplicationActionTypes.APP_INIT, { data }),
  appInitFailure: (error) =>
    createAction(ApplicationActionTypes.APP_INIT_FAILURE, { error }),
};
