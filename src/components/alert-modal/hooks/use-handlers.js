import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { alertActions } from "@redux-store";

export const useHandlers = () => {
  const dispatch = useDispatch();

  const onDismiss = useCallback(() => {
    dispatch(alertActions.hide());
  }, [dispatch]);

  return {
    onDismiss,
  };
};
