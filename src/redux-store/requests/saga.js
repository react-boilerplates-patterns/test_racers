import {all} from 'redux-saga/effects';

import {getPaginatedDriversRequestWatchSaga} from './drivers/get-paginated/saga';

export function* requestsWatchSaga() {
  yield all([getPaginatedDriversRequestWatchSaga()]);
}
