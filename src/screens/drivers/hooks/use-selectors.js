import {useSelector} from 'react-redux';
import {requestsSelectors} from 'redux-store';

export const useSelectors = () => {
  const drivers = useSelector(
    requestsSelectors.drivers.getPaginatedDriversData,
  );
  const driversAreLoading = useSelector(
    requestsSelectors.drivers.getIsLoadingPaginatedData,
  );

  const offset = useSelector(requestsSelectors.drivers.getOffset);

  const totalDrivers = useSelector(
    requestsSelectors.drivers.getTotalDriversAmount,
  );

  return {
    drivers,
    driversAreLoading,
    offset,
    totalDrivers,
  };
};
