import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.233.90.168:3001/api/",
});

export default axiosInstance;
