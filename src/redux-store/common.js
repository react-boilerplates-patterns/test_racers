import {put, call} from 'redux-saga/effects';

export function* makeRequestSaga(
  successActionCreator,
  failureActionCreator,
  apiFn,
  apiFnParams = {},
) {
  try {
    const response = yield call(apiFn, apiFnParams);
    if (response) {
      yield put(successActionCreator(response.data));
    }
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log('error.response.data', error.response.data);
      console.log('error.response.status', error.response.status);
      console.log('error.response.headers', error.response.headers);
      yield put(failureActionCreator(error.response.data));
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error Request', error.request);
      yield put(failureActionCreator(error.request._response));
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error Message', error.message);
      yield put(failureActionCreator(error.message));
    }
  }
}
