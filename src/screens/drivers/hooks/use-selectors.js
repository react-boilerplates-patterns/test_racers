import { useSelector } from "react-redux";

import { requestsSelectors, navigationSelectors } from "@redux-store";

export const useSelectors = () => {
  const data = useSelector(requestsSelectors.drivers.getData);
  const dataIsLoading = useSelector(requestsSelectors.drivers.getDataIsLoading);
  const isLastPage = useSelector(requestsSelectors.drivers.getIsLastPage);
  const error = useSelector(requestsSelectors.drivers.getError);

  const offset = useSelector(navigationSelectors.getOffsetSelector);

  return {
    data,
    dataIsLoading,
    offset,
    isLastPage,
    error,
  };
};
