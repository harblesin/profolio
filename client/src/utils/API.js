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

  saveSkills: function(skillsInfo) {
    return axios.post("/api/users/saveSkills", skillsInfo);
  },

  saveContact: function(saveContact) {
    return axios.post("/api/users/saveContact", saveContact);
  },

  newProfolio: function(profolioName) {
    return axios.post("/api/users/newProfolio", profolioName);
  },

  deleteProfolio: function(profId) {
    return axios.post("/api/users/deleteProfolio", profId);
  },

  saveProjectCard: function(savedProjectCard) {
    return axios.post("/api/users/saveProjectCard", savedProjectCard);
  },

  saveFinalProf: function(info) {
    return axios.post("/api/users/final", info);
  },

  getFinalProf: function(info) {
    return axios.post("/api/users/finalget", info);
  }
};
