export const applicationSelectors = {
  getIsApplicationLoading: (state) => state.application.isLoading,
  getInitData: (state) => state.application.initData,
  getError: (state) => state.application.error,
};
