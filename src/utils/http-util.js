import axios from 'axios';
import Constants from '../constants/general-constant';

export default class HttpUtil {
  constructor(BASE_URL = Constants.URI_PIXABAY) {
    this.BASE_URL = this.defineAPI(BASE_URL);
  }

  defineAPI(BASE_URL, env = 'dev') {
    let env_name = Constants.environments[env];
    const API_KEY_PIXABAY = Constants.API[env_name].API_KEY;
    return `${BASE_URL}/?key=${API_KEY_PIXABAY}`;
  }

  getImages(query, specificAPI) {
    if (query) {
      return axios.get(`${this.BASE_URL}&q=${query}&image_type=photo`);
    }
    return axios.get(specificAPI);
  }
}
