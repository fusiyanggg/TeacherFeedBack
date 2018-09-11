import axios from 'axios';
import config from '../config/config';

export default {
  getFeedBacks(params) {
    return axios.get(config.baseUrl + '/lessons/cur', {params})
  },

  addLesson(data) {
    return axios.post(config.baseUrl + '/lessons/add', data)
  }
}
