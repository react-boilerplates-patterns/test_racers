import { createAction } from "@helpers";

export const ActionTypes = {
  GET_DRIVERS_REQUEST: "GET_TOTAL_DRIVERS_AMOUNT",
  GET_TOTAL_DRIVERS_AMOUNT_SUCCESS: "GET_TOTAL_DRIVERS_AMOUNT_SUCCESS",
  GET_SPECIFIC_DRIVER_SUCCESS: "GET_SPECIFIC_DRIVER_SUCCESS",
  GET_DRIVERS_FIRST_PAGE_JSON_REQUEST_SUCCESS:
    "GET_DRIVERS_FIRST_PAGE_JSON_REQUEST_SUCCESS",
  GET_DRIVERS_NEXT_PAGE_JSON_REQUEST_SUCCESS:
    "GET_DRIVERS_NEXT_PAGE_JSON_REQUEST_SUCCESS",
  GET_DRIVERS_JSON_REQUEST_FAIL: "GET_DRIVERS_JSON_REQUEST_FAIL",
};

export const Actions = {
  getDrivers: () => createAction(ActionTypes.GET_DRIVERS_REQUEST),
  getAllDriversSuccess: () =>
    createAction(ActionTypes.GET_TOTAL_DRIVERS_AMOUNT_SUCCESS),
  getSpecificDriverSuccess: (data) =>
    createAction(ActionTypes.GET_SPECIFIC_DRIVER_SUCCESS, { data }),
  getDriversFirstPageSuccess: (data, offset, limit) =>
    createAction(ActionTypes.GET_DRIVERS_FIRST_PAGE_JSON_REQUEST_SUCCESS, {
      data,
      offset,
      limit,
    }),
  getDriversNextPageSuccess: (data, offset, limit) =>
    createAction(ActionTypes.GET_DRIVERS_NEXT_PAGE_JSON_REQUEST_SUCCESS, {
      data,
      offset,
      limit,
    }),
  getDriversFailure: (data) =>
    createAction(ActionTypes.GET_DRIVERS_JSON_REQUEST_FAIL, { data }),
};
