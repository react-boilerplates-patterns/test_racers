import * as fromActions from "./actions";

export const initialState = {
  offset: 0,
};

export const navigationReducers = (state = initialState, action) => {
  switch (action.type) {
    case fromActions.NavigationActionTypes.SET_OFFSET: {
      const { payload } = action;

      return {
        ...state,
        offset: payload.data,
      };
    }

    default:
      return state;
  }
};
