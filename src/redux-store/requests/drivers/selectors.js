export const getData = (state) => {
  return state.requests.drivers.data;
};

export const getDataIsLoading = (state) => {
  return state.requests.drivers.isLoading;
};

export const getIsLastPage = (state) => {
  return state.requests.drivers.isLastPage;
};

export const getError = (state) => {
  return state.requests.drivers.error;
};
