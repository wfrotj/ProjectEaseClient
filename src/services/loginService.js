import axios from "axios";
const baseUrl = "http://localhost:3000/api/teachers/login";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/teachers/login",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});
async function login(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}
function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}
export default {
  login,
  setToken,
};
