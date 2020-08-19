import { createAction } from "@helpers";

export const NavigationActionTypes = {
  SET_OFFSET: "SET_OFFSET",
};

export const navigationActions = {
  setOffset: (data) => createAction(NavigationActionTypes.SET_OFFSET, { data }),
};
