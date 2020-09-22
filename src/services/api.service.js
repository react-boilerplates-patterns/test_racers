import axios from 'axios';
import {ApiUrl} from 'project-constants';

class API {
  _instance = axios.create({
    baseURL: ApiUrl.baseUrl,
    timeout: 20000,
  });

  get(url, config) {
    return this._instance.get(url, config);
  }
}

export const apiService = new API();
