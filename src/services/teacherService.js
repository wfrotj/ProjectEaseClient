import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/teachers/login",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});
function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

export default {
  setToken,
};
