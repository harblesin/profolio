import axios from "axios";

export default {
  getUsers: function() {
    return;
  },

  saveUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  }
};
