import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { alertActions } from "@redux-store";
import { screenNames } from "@constants";
import * as RootNavigation from "@routes";

export const useHandlers = () => {
  const dispatch = useDispatch();

  const handleButtonPress = useCallback(() => {
    dispatch(alertActions.hide());
    RootNavigation.navigate(screenNames.DRIVERS_NAVIGATOR);
  }, [dispatch]);

  return {
    handleButtonPress,
  };
};
