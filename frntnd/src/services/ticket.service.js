import axios from "axios";
const API_URL = "http://localhost:4000/";

class LectionService {
  
  create(data) {
    return axios.post(API_URL + `ticket`, data);
  };

  findAll() {
    return axios.get(API_URL + `ticket`);
  }

  findOne(id_ticket) {
      return axios.get(API_URL + `ticket/${id_ticket}`);
  }


  update(id_ticket, data) {
      return axios.post(API_URL + `ticket/${id_ticket}`, data);
  }

  delete(id_ticket) {
    return axios.delete(API_URL + `ticket/${id_ticket}`);
  }
  
}

export default new LectionService();
