import { getAllDrivers } from "../../api/drivers";
import { applicationActions } from "./actions";
import { makeRequestThunk } from "../common";

export const applicationThunks = {
  appInitThunk() {
    return makeRequestThunk(
      applicationActions.appInitRequest,
      applicationActions.appInit,
      applicationActions.appInitFailure,
      getAllDrivers
    );
  },
};
