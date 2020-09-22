import {combineReducers} from 'redux';

import {getDriversPaginatedReducer} from './drivers/get-paginated/reducers';

export const requestsReducers = combineReducers({
  drivers: combineReducers({
    getDriversPaginated: getDriversPaginatedReducer,
  }),
});
