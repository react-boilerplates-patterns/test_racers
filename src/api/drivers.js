import {apiService} from 'services';
import {ApiUrlParams, DEFAULT_PAGINATION_LIMIT} from 'project-constants';

export function getNextPageDrivers(data) {
  return apiService.get(`${ApiUrlParams.drivers}.json`, {
    params: {
      [ApiUrlParams.limit]: DEFAULT_PAGINATION_LIMIT,
      [ApiUrlParams.offset]: data.offset <= 0 ? 0 : data.offset,
    },
  });
}

export function getDriversFirstPage(data) {
  return apiService.get(`${ApiUrlParams.drivers}.json`, {
    params: {
      [ApiUrlParams.limit]: DEFAULT_PAGINATION_LIMIT,
      [ApiUrlParams.offset]: 0,
    },
  });
}
