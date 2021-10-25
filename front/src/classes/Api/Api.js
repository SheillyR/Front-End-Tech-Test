import { axios } from './Api.module';

class Api {
  constructor(url) {
    this.url = url;
  }

  async get() {
    return axios.get(this.url);
  }
}

export default Api;