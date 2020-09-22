import {takeLatest, call} from 'redux-saga/effects';
import {ActionTypes, Actions} from './actions';
import {makeRequestSaga} from '../../../common';
import {getDriversFirstPage, getNextPageDrivers} from 'api/drivers';

export function* firstGetPaginatedDriversRequestSaga({payload}) {
  yield call(
    makeRequestSaga,
    Actions.getFirstPaginatedSuccess,
    Actions.getPaginatedFail,
    getDriversFirstPage,
    payload.data,
  );
}

export function* nextGetPaginatedDriversRequestSaga({payload}) {
  yield call(
    makeRequestSaga,
    Actions.getNextPaginatedSuccess,
    Actions.getPaginatedFail,
    getNextPageDrivers,
    payload.data,
  );
}

export function* getPaginatedDriversRequestWatchSaga() {
  yield takeLatest(
    ActionTypes.GET_FIRST_PAGINATED_DRIVERS_REQUEST,
    firstGetPaginatedDriversRequestSaga,
  );
  yield takeLatest(
    ActionTypes.GET_NEXT_PAGINATED_DRIVERS_REQUEST,
    nextGetPaginatedDriversRequestSaga,
  );
}
