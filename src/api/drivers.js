import { apiService } from "@services";
import {
  ApiUrlParams,
  DEFAULT_PAGINATION_LIMIT,
  MAXIMUM_LIMIT,
} from "@constants";

export function getNextPageDrivers(data) {
  return apiService.get(
    `${!data.season || data.season === "All" ? "" : data.season + "/"}${
      ApiUrlParams.drivers
    }`,
    {
      params: {
        [ApiUrlParams.limit]: data.limit || DEFAULT_PAGINATION_LIMIT,
        [ApiUrlParams.offset]: data.offset,
      },
    }
  );
}

export function getDriversFirstPage(data) {
  return apiService.get(
    `${!data.season || data.season === "All" ? "" : data.season + "/"}${
      ApiUrlParams.drivers
    }`,
    {
      params: {
        [ApiUrlParams.limit]: data.limit || DEFAULT_PAGINATION_LIMIT,
      },
    }
  );
}

export function getSpecificDriver(data) {
  return apiService.get(
    `${!data.season || data.season === "All" ? "" : data.season + "/"}${
      ApiUrlParams.specificDriver
    }${"/" + data.driverId + ".json"}`,
    {
      params: {
        [ApiUrlParams.limit]: data.limit || DEFAULT_PAGINATION_LIMIT,
      },
    }
  );
}

export function getAllDrivers() {
  return apiService.get(ApiUrlParams.drivers, {
    params: {
      [ApiUrlParams.limit]: MAXIMUM_LIMIT,
    },
  });
}
