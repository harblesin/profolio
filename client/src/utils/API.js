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

  grabProfiles: function() {
    return axios.get("/api/users/test");
  },

  getPortfolio: function(profolioId) {
    return axios.post("/api/users/getPortfolio", profolioId);
  },

  getBio: function(profolioId) {
    console.log("profolioId = " + profolioId);
    return axios.post("/api/users/getBio", profolioId);
  },

  saveBio: function(bioInfo) {
    return axios.post("/api/users/saveBio", bioInfo);
  },

  newProfolio: function() {
    return axios.post("/api/users/newProfolio");
  },

  saveProjectCard: function(projectCard) {
    return axios.post("/api/users/saveProjectCard", projectCard);
  }
};
