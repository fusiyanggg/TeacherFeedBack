import axios from 'axios'
import config from '../config/config'

const utils = {
  createGrade(obj) {
    return axios.post(config.baseUrl + '/grades/create', obj)
  },
  loadData() {
    return axios.get(config.baseUrl + '/grades/all')
  }
};

export default utils
