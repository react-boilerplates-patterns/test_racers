import * as fromActions from './actions';

export const initialState = {
  isLoading: false,
  error: null,
  data: null,
  offset: 0,
  totalDrivers: 0,
};

export const getDriversPaginatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case fromActions.ActionTypes.GET_FIRST_PAGINATED_DRIVERS_REQUEST:
      return {
        ...state,
        totalDrivers: 0,
        offset: 0,
        isLoading: true,
        error: null,
        data: null,
      };

    case fromActions.ActionTypes.GET_NEXT_PAGINATED_DRIVERS_REQUEST:
      return {
        ...state,
        totalDrivers: 0,
        offset: 0,
        isLoading: true,
        error: null,
        data: null,
      };

    case fromActions.ActionTypes.GET_FIRST_PAGINATED_DRIVERS_REQUEST_SUCCESS: {
      const {payload} = action;
      console.log(
        'getDriversPaginatedReducer -> payload.data.MRData.total',
        payload.data.MRData.total,
      );

      return {
        ...state,
        offset: 0,
        isLoading: false,
        data: payload.data.MRData.DriverTable.Drivers,
        totalDrivers: payload.data.MRData.total,
      };
    }

    case fromActions.ActionTypes.GET_NEXT_PAGINATED_DRIVERS_REQUEST_SUCCESS: {
      const {payload} = action;

      return {
        ...state,
        offset: parseInt(payload.data.MRData.offset),
        isLoading: false,
        data: payload.data.MRData.DriverTable.Drivers,
        totalDrivers: payload.data.MRData.total,
      };
    }

    case fromActions.ActionTypes.GET_PAGINATED_DRIVERS_REQUEST_FAIL: {
      const {payload} = action;

      return {
        ...state,
        totalDrivers: 0,
        offset: 0,
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
};
