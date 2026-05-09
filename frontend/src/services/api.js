import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://assign8-blond.vercel.app/api",
});

export default API;