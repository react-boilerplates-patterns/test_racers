import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";

import { applicationThunks } from "@thunks";

export function useInitApp() {
  const dispatch = useDispatch();

  const getInitData = useCallback(() => {
    dispatch(applicationThunks.appInitThunk());
  }, [dispatch]);

  useEffect(() => {
    getInitData();
  }, [getInitData]);

  return {
    getInitData,
  };
}
