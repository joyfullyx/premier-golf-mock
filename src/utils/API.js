// import axios from "axios";
const axios = require("axios");

// for local
// const urlPrefix = "http://localhost:3001";
const urlPrefix = "https://premier-golf-mock-server.herokuapp.com";

const API = {
  getAllDeals: function (deals) {
    return axios.get(`${urlPrefix}/api/deals`);
  },
  getDealsById: function (dealsId) {
    return axios.get(`${urlPrefix}/api/deals/${dealsId}`);
  },
};

export default API;
