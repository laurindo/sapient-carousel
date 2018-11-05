import axios from 'axios';

export default class HttpUtil {
  constructor() {
    this.BASE_URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API}`;
  }
  getImages(query = 'beautiful+landscape') {
    return axios.get(`${this.BASE_URL}&q=${query}&image_type=photo`);
  }
}
