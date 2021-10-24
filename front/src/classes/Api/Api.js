import { axios } from './Api.module';

class Api {
  constructor(url, headers = {}) {
    this.url = url;
    this.headers = headers;
  }

  async get() {
    return axios.get(this.url);
  }
}

export default Api;