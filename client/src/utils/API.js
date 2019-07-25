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

  logout: function() {
    return axios.get("/api/users/logout");
  },

  authCheck: function() {
    return axios.get("/api/users/check");
  },

  test: function() {
    return axios.post("/api/users/test");
  },

  grabProfiles: function(){
    return axios.get("/api/users/test")
  }
};
