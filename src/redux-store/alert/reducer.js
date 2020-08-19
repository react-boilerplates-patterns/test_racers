import {AlertActionTypes} from './actions';

export const initialState = {
  isVisible: false,
  alertData: {
    title: null,
    text: null,
  },
};

export function alertReducer(state = initialState, action) {
  switch (action.type) {
    case AlertActionTypes.SHOW_ALERT: {
      const {payload} = action;

      return {
        isVisible: true,
        alertData: payload.data,
      };
    }
    case AlertActionTypes.HIDE_ALERT: {
      return initialState;
    }

    default:
      return state;
  }
}
