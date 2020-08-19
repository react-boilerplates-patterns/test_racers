import * as fromActions from "./actions";

export const initialState = {
  error: null,
  data: null,
  isLoading: false,
  isLastPage: false,
};

export const getDriversReducer = (state = initialState, action) => {
  switch (action.type) {
    case fromActions.ActionTypes.GET_DRIVERS_REQUEST:
      return {
        isLoading: true,
        error: null,
        data: null,
      };

    case fromActions.ActionTypes.GET_TOTAL_DRIVERS_AMOUNT_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.GET_SPECIFIC_DRIVER_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data.MRData.DriverTable.Drivers,
        isLastPage: true,
      };
    }

    case fromActions.ActionTypes.GET_DRIVERS_FIRST_PAGE_JSON_REQUEST_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data.MRData.DriverTable.Drivers,
        isLastPage:
          parseInt(payload.data.MRData.total) <
          parseInt(payload.data.MRData.offset)
            ? true
            : false,
      };
    }

    case fromActions.ActionTypes.GET_DRIVERS_NEXT_PAGE_JSON_REQUEST_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data.MRData.DriverTable.Drivers,
        isLastPage:
          parseInt(payload.data.MRData.total) <
          parseInt(payload.data.MRData.offset)
            ? true
            : false,
      };
    }

    case fromActions.ActionTypes.GET_DRIVERS_JSON_REQUEST_FAIL: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        error: payload.errors,
      };
    }

    default:
      return state;
  }
};
