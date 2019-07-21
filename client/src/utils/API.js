import axios from "axios";

export default {
  getUser: function(userInfo) {
    return axios.get("/api/users", userInfo);
  },

  saveUser: function(userInfo) {
    return axios.post("/api/users/register", userInfo);
  },

  loginUser: function(userInfo) {
    return axios.post("/api/users/login", userInfo);
  },

  authCheck: function() {
    return axios.get("/api/users/check");
  },

  test: function() {
    return axios.post("/api/users/test");
  },

  grabProfiles: function(user){
    return axios.get("/api/users/test", user)
  }
};
