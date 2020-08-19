import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { requestsThunks } from "@thunks";

export const useGetDrivers = ({ driverId, season, limit }) => {
  const dispatch = useDispatch();

  const getDrivers = useCallback(() => {
    driverId !== "All" && driverId !== null
      ? dispatch(
          requestsThunks.fetchSpecificDriverThunk({ driverId, season, limit })
        )
      : dispatch(requestsThunks.fetchFirstDriversPageThunk({ season, limit }));
  }, [dispatch, driverId, season, limit]);

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);

  return { getDrivers };
};
