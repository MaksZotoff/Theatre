import axios from "axios";

const API_URL = "http://localhost:4000/";


class AuthService {
 register = (login, email, pass) => {
  return axios.post(API_URL + "signup", {
    login,
    email,
    pass,
  });
};

 login = (login, pass) => {
  return axios.post(API_URL + "signin", {
    login,
    pass 
  }).then( (response) =>{
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

 logout = () => {
  localStorage.removeItem("user");
};



 getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}
}

export default new AuthService();
