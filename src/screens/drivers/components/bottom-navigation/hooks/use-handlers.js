import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { requestsThunks } from "@thunks";
import { navigationActions } from "@redux-store";

export const useHandlers = ({ driverId, season, limit, offset }) => {
  const dispatch = useDispatch();

  const nextPage = useCallback(() => {
    const calcOffset = `${parseInt(offset) + parseInt(limit)}`;
    dispatch(navigationActions.setOffset(calcOffset));
    dispatch(
      requestsThunks.fetchNextPageDriversThunk({
        season,
        driverId,
        limit,
        offset: calcOffset,
      })
    );
  }, [offset]);

  const previousPage = useCallback(() => {
    const calcOffset = `${parseInt(offset) - parseInt(limit)}`;
    dispatch(navigationActions.setOffset(offset <= 0 ? 0 : calcOffset));
    dispatch(
      requestsThunks.fetchNextPageDriversThunk({
        season,
        driverId,
        limit,
        offset: offset <= 0 ? 0 : calcOffset,
      })
    );
  }, [offset]);

  return {
    nextPage,
    previousPage,
  };
};
