import {alertActions} from './alert/actions';
import {handleErrorStatus} from '@helpers';

export function makeRequestThunk(
  requestActionCreator,
  successActionCreator,
  failureActionCreator,
  apiFn,
  data,
) {
  return function (dispatch) {
    dispatch(requestActionCreator());

    apiFn(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(successActionCreator(response.data));
        }
      })
      .catch((error) => {
        console.log('error', Object.keys(error));
        console.log('error.response', error.response);
        dispatch(
          alertActions.show({
            title: 'Error',
            text: handleErrorStatus(error),
          }),
        );
        dispatch(failureActionCreator(error));
      });
  };
}
