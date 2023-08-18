import axios from "axios";

const baseUrl = "http://localhost:3000/api/teachers";

async function register(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}
export default {
  register,
};
