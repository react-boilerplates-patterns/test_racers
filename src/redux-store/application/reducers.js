import * as fromActions from "./actions";

export const initialState = {
  isLoading: false,
  initData: null,
  error: "",
};

export const applicationReducers = (state = initialState, action) => {
  switch (action.type) {
    case fromActions.ApplicationActionTypes.SET_APPLICATION_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case fromActions.ApplicationActionTypes.APP_INIT_REQUEST: {
      return {
        isLoading: true,
        initData: null,
        error: null,
      };
    }

    case fromActions.ApplicationActionTypes.APP_INIT: {
      const { payload } = action;

      const getDriversNames = (array) => {
        return array.map((driver) => ({
          label: `${driver.familyName} ${driver.givenName}`,
          value: driver.driverId,
        }));
      };

      const driversNames = getDriversNames(
        payload.data.MRData.DriverTable.Drivers
      );

      return {
        ...state,
        isLoading: false,
        initData: driversNames,
      };
    }

    case fromActions.ApplicationActionTypes.APP_INIT_FAILURE: {
      const { payload } = action;

      return {
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
};
