import axios from "axios";
const API_URL = "http://localhost:4000/";

class PerformanceService {
  
  create(data) {
    return axios.post(API_URL + `performance`, data);
  };

  findAll() {
    return axios.get(API_URL + `performance`);
  }

  findOne(id_performance) {
      return axios.get(API_URL + `performance/${id_performance}`);
  }


  update(id_performance, data) {
      return axios.post(API_URL + `performance/${id_performance}`, data);
  }

  delete(id_performance) {
    return axios.delete(API_URL + `performance/${id_performance}`);
  }
  
}

export default new PerformanceService();
