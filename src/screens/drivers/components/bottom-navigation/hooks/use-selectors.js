import { useSelector } from "react-redux";

import { requestsSelectors, navigationSelectors } from "@redux-store";

export const useSelectors = () => {
  const isLastPage = useSelector(requestsSelectors.drivers.getIsLastPage);

  const offset = useSelector(navigationSelectors.getOffsetSelector);

  return {
    offset,
    isLastPage,
  };
};
