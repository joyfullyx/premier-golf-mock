import axios from "axios";

const api = {
  search: function () {
    return axios.get("https://golfworldapi.com/api/bv1/Country");
  },
};

export default api;
