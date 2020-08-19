import { useSelector } from "react-redux";

import { applicationSelectors } from "@redux-store";

export const useSelectors = () => {
  const initData = useSelector(applicationSelectors.getInitData);

  const appIsLoading = useSelector(
    applicationSelectors.getIsApplicationLoading
  );

  const error = useSelector(applicationSelectors.getError);

  return {
    appIsLoading,
    initData,
    error,
  };
};
