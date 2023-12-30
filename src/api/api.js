import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=20";

const api = axios.create({
  baseURL: apiURL,
});

export default api;
