import * as getDriverPaginated from './drivers/get-paginated/actions';

export const requestsActions = {
  drivers: {
    ...getDriverPaginated.Actions,
  },
};

export const requestActionTypes = {
  drivers: {
    ...getDriverPaginated.ActionTypes,
  },
};
