import {takeLatest, put} from 'redux-saga/effects';
import {requestActionTypes} from '../requests/actions';
import {alertActions} from './actions';

function* showErrorAlertSaga({payload}) {
  console.log('function*showErrorAlertSaga -> payload', payload);
  yield put(alertActions.show({type: 'Error', message: payload.error}));
}

export function* alertWatchSaga() {
  yield takeLatest(
    requestActionTypes.drivers.GET_PAGINATED_DRIVERS_REQUEST_FAIL,
    showErrorAlertSaga,
  );
}
