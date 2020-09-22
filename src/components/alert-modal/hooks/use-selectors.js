import {useSelector} from 'react-redux';

import {alertSelectors} from 'redux-store';

export const useSelectors = () => {
  const isVisibleAlert = useSelector(alertSelectors.getIsVisibleAlert);
  const alertData = useSelector(alertSelectors.getAlertData);

  return {
    isVisibleAlert,
    alertData,
  };
};
