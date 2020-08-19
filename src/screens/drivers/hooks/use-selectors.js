import { useSelector } from "react-redux";

import { requestsSelectors, navigationSelectors } from "@redux-store";

export const useSelectors = () => {
  const data = useSelector(requestsSelectors.drivers.getData);
  const dataIsLoading = useSelector(requestsSelectors.drivers.getDataIsLoading);

  return {
    data,
    dataIsLoading,
  };
};
