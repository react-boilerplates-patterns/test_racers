import {useDispatch} from 'react-redux';
import {useState, useCallback} from 'react';
import {requestsActions} from 'redux-store';
import {DEFAULT_OFFSET} from 'constants/config';

export const useTableNavigation = (offset) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const getNextDriversPage = useCallback(
    (currentPage) => {
      setPage(currentPage);
      dispatch(
        requestsActions.drivers.getNextPaginated({
          offset:
            currentPage >= 1
              ? offset + DEFAULT_OFFSET
              : offset - DEFAULT_OFFSET,
        }),
      );
    },
    [offset],
  );

  return {
    page,
    getNextDriversPage,
  };
};
