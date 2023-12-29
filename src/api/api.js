import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: apiURL,
});

export default api;
