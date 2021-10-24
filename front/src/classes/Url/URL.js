require('dotenv').config();

class URL {
  static get URL_SERVER() {
    return process.env.REACT_APP_URL;
  }
}

export default URL;