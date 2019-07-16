import axios from "axios";


export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  saveUser: function(userInfo) {
    return axios.post("/api/users/register", userInfo);
  }


};
