import {all} from 'redux-saga/effects';
import {requestsWatchSaga} from './requests/saga';
import {alertWatchSaga} from './alert/saga';

export function* rootSaga() {
  yield all([requestsWatchSaga(), alertWatchSaga()]);
}
