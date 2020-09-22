export const getIsLoadingPaginatedData = (state) =>
  state.requests.drivers.getDriversPaginated.isLoading;

export const getPaginatedDriversData = (state) =>
  state.requests.drivers.getDriversPaginated.data;

export const getOffset = (state) =>
  state.requests.drivers.getDriversPaginated.offset;

export const getTotalDriversAmount = (state) =>
  state.requests.drivers.getDriversPaginated.totalDrivers;
