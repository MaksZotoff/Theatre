import axios from "axios";

const API_URL = "http://localhost:4000/";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class AdminService {
  
  findAll() {
    return axios.get(API_URL + `user`);
  }

  findOne(id_user) {
      return axios.get(API_URL + `user/${id_user}`);
  }

  findByLogin(login) {
    return axios.get(API_URL + `user?login=${login}`);
  };



  register(login, email, pass) {
    return axios.post(API_URL + "adduser", {
      login,
      email,
      pass,
    });
  }


  update(id_user, data) {
      return axios.post(API_URL + `user/${id_user}`, data);
  }

  remove(id_user) {
    return axios.delete(API_URL + `user/${id_user}`);
  }
  
}

export default new AdminService();
