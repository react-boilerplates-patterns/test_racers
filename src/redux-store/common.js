import { alertActions } from "./alert/actions";
import { handleErrorStatus } from "@helpers";

export function makeRequestThunk(
  requestActionCreator,
  successActionCreator,
  failureActionCreator,
  apiFn,
  data
) {
  return function (dispatch) {
    dispatch(requestActionCreator());

    apiFn(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(successActionCreator(response.data));
        }
      })
      .catch((error) => {
        dispatch(
          alertActions.show({
            title: "Error",
            text: `Error is received with status:${handleErrorStatus(error)}`,
          })
        );
        dispatch(failureActionCreator(error));
      });
  };
}

const test = [
  {
    adapter: ["xhrAdapter"],
    baseURL: "http://ergast.com/api/f1/",
    data: undefined,
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    maxContentLength: -1,
    method: "get",
    params: {
      limit: "30",
    },
    timeout: 10000,
    transformRequest: ["transformRequest"],
    transformResponse: [["transformResponse"]],
    url: "drivers.json/abate",
    validateStatus: ["validateStatus"],
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
  {
    DONE: 4,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    OPENED: 1,
    UNSENT: 0,
    _aborted: false,
    _cachedResponse: undefined,
    _hasError: false,
    _headers: {
      accept: "application/json, text/plain, */*",
    },
    _incrementalEvents: false,
    _lowerCaseResponseHeaders: {
      connection: "close",
      "content-length": "117",
      "content-type": "text/html; charset=UTF-8",
      date: "Wed, 19 Aug 2020 10:31:04 GMT",
      server: "Apache/2.2.15 (CentOS)",
      "x-powered-by": "PHP/5.3.3",
    },
    _method: "GET",
    _requestId: null,
    _response: `<html>
  <head>
    <title>Error</title>
  </head>
  <body>
    <h3>Format not found.</h3>
  </body>
</html>
`,
    _responseType: "",
    _sent: true,
    _subscriptions: [],
    _timedOut: false,
    _trackingName: "unknown",
    _url: "http://ergast.com/api/f1/drivers.json/abate?limit=30",
    readyState: 4,
    responseHeaders: {
      Connection: "close",
      "Content-Length": "117",
      "Content-Type": "text/html; charset=UTF-8",
      Date: "Wed, 19 Aug 2020 10:31:04 GMT",
      Server: "Apache/2.2.15 (CentOS)",
      "X-Powered-By": "PHP/5.3.3",
    },
    responseURL: "http://ergast.com/api/f1/drivers.json/abate?limit=30",
    status: 404,
    timeout: 10000,
    upload: {},
    withCredentials: true,
  },
  {
    config: {
      adapter: ["xhrAdapter"],
      baseURL: "http://ergast.com/api/f1/",
      data: undefined,
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      maxContentLength: -1,
      method: "get",
      params: {
        limit: "30",
      },
      timeout: 10000,
      transformRequest: [["transformRequest"]],
      transformResponse: [["transformResponse"]],
      url: "drivers.json/abate",
      validateStatus: ["validateStatus"],
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
    },
    data: `<html>
  <head>
    <title>Error</title>
  </head>
  <body>
    <h3>Format not found.</h3>
  </body>
</html>
`,
    headers: {
      connection: "close",
      "content-length": "117",
      "content-type": "text/html; charset=UTF-8",
      date: "Wed, 19 Aug 2020 10:31:04 GMT",
      server: "Apache/2.2.15 (CentOS)",
      "x-powered-by": "PHP/5.3.3",
    },
    request: {
      DONE: 4,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      OPENED: 1,
      UNSENT: 0,
      _aborted: false,
      _cachedResponse: undefined,
      _hasError: false,
      _headers: {
        accept: "application/json, text/plain, */*",
      },
      _incrementalEvents: false,
      _lowerCaseResponseHeaders: {
        connection: "close",
        "content-length": "117",
        "content-type": "text/html; charset=UTF-8",
        date: "Wed, 19 Aug 2020 10:31:04 GMT",
        server: "Apache/2.2.15 (CentOS)",
        "x-powered-by": "PHP/5.3.3",
      },
      _method: "GET",
      _requestId: null,
      _response: `<html>
  <head>
    <title>Error</title>
  </head>
  <body>
    <h3>Format not found.</h3>
  </body>
</html>
`,
      _responseType: "",
      _sent: true,
      _subscriptions: [],
      _timedOut: false,
      _trackingName: "unknown",
      _url: "http://ergast.com/api/f1/drivers.json/abate?limit=30",
      readyState: 4,
      responseHeaders: {
        Connection: "close",
        "Content-Length": "117",
        "Content-Type": "text/html; charset=UTF-8",
        Date: "Wed, 19 Aug 2020 10:31:04 GMT",
        Server: "Apache/2.2.15 (CentOS)",
        "X-Powered-By": "PHP/5.3.3",
      },
      responseURL: "http://ergast.com/api/f1/drivers.json/abate?limit=30",
      status: 404,
      timeout: 10000,
      upload: {},
      withCredentials: true,
    },
    status: 404,
    statusText: undefined,
  },
  true,
  ["anonymous"],
];
