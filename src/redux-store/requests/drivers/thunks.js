import {
  getAllDrivers,
  getDriversFirstPage,
  getNextPageDrivers,
  getSpecificDriver,
} from "api/drivers";
import { requestsActions } from "@redux-store";
import { makeRequestThunk } from "../../common";

export function fetchAllDriversThunk() {
  return makeRequestThunk(
    requestsActions.drivers.getDrivers,
    requestsActions.drivers.getAllDriversSuccess,
    requestsActions.drivers.getDriversFailure,
    getAllDrivers
  );
}

export function fetchSpecificDriverThunk(data) {
  return makeRequestThunk(
    requestsActions.drivers.getDrivers,
    requestsActions.drivers.getSpecificDriverSuccess,
    requestsActions.drivers.getDriversFailure,
    getSpecificDriver,
    data
  );
}

export function fetchFirstDriversPageThunk(data) {
  return makeRequestThunk(
    requestsActions.drivers.getDrivers,
    requestsActions.drivers.getDriversFirstPageSuccess,
    requestsActions.drivers.getDriversFailure,
    getDriversFirstPage,
    data
  );
}

export function fetchNextPageDriversThunk(data) {
  return makeRequestThunk(
    requestsActions.drivers.getDrivers,
    requestsActions.drivers.getDriversNextPageSuccess,
    requestsActions.drivers.getDriversFailure,
    getNextPageDrivers,
    data
  );
}
