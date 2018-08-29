import axios from 'axios'
import config from '../config/config'

export default {
  createGrade(data) {
    return axios.post(config.baseUrl + '/grades/create',data);
  },

  loadData() {
    return axios.get(config.baseUrl + '/grades/all');
  }
}
