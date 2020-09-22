import {createAction} from 'helpers';

export const ActionTypes = {
  GET_FIRST_PAGINATED_DRIVERS_REQUEST: 'GET_FIRST_PAGINATED_DRIVERS_REQUEST',
  GET_NEXT_PAGINATED_DRIVERS_REQUEST: 'GET_NEXT_PAGINATED_DRIVERS_REQUEST',
  GET_FIRST_PAGINATED_DRIVERS_REQUEST_SUCCESS:
    'GET_FIRST_PAGINATED_DRIVERS_REQUEST_SUCCESS',
  GET_NEXT_PAGINATED_DRIVERS_REQUEST_SUCCESS:
    'GET_NEXT_PAGINATED_DRIVERS_REQUEST_SUCCESS',
  GET_PAGINATED_DRIVERS_REQUEST_FAIL: 'GET_PAGINATED_DRIVERS_REQUEST_FAIL',
};

export const Actions = {
  getFirstPaginated: (data) => {
    return createAction(ActionTypes.GET_FIRST_PAGINATED_DRIVERS_REQUEST, {
      data,
    });
  },

  getNextPaginated: (data) => {
    return createAction(ActionTypes.GET_NEXT_PAGINATED_DRIVERS_REQUEST, {data});
  },

  getFirstPaginatedSuccess: (data) => {
    return createAction(
      ActionTypes.GET_FIRST_PAGINATED_DRIVERS_REQUEST_SUCCESS,
      {data},
    );
  },

  getNextPaginatedSuccess: (data) => {
    return createAction(
      ActionTypes.GET_NEXT_PAGINATED_DRIVERS_REQUEST_SUCCESS,
      {data},
    );
  },

  getPaginatedFail: (error) => {
    return createAction(ActionTypes.GET_PAGINATED_DRIVERS_REQUEST_FAIL, {
      error,
    });
  },
};
