import axios from 'axios';

export default class HttpUtil {
  constructor() {
    this.BASE_URL = `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39`;
  }
  getImages(query = 'beautiful+landscape') {
    return axios.get(`${this.BASE_URL}&q=${query}&image_type=photo`);
  }
}
