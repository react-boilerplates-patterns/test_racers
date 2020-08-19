import axios from "axios";
import { ApiUrl } from "@constants";

class API {
  _instance = axios.create({
    baseURL: ApiUrl.baseUrl,
    timeout: 10000,
  });

  get(url, config) {
    return this._instance.get(url, config);
  }
  post(url, data, config) {
    return this._instance.post(url, data, config);
  }
  put(url, data, config) {
    return this._instance.put(url, data, config);
  }
}

export const apiService = new API();
