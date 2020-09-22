import {createAction} from 'helpers';

export const AlertActionTypes = {
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT',
};

export const alertActions = {
  show: (data) => createAction(AlertActionTypes.SHOW_ALERT, {data}),
  hide: () => createAction(AlertActionTypes.HIDE_ALERT),
};
