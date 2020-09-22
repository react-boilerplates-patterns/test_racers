import {useDispatch} from 'react-redux';
import {useCallback, useEffect} from 'react';
import {requestsActions} from 'redux-store';

export const useGetDrivers = () => {
  const dispatch = useDispatch();

  const getDrivers = useCallback(() => {
    dispatch(requestsActions.drivers.getFirstPaginated());
  }, [dispatch]);

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);

  return {getDrivers};
};
