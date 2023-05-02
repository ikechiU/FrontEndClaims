import axios from "axios";

const endPoint = axios.create({ baseURL: process.env.React_App_backendCall });
const token = localStorage.getItem("token");
endPoint.interceptors.request.use((config) => {
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});
export default endPoint;
export const baseURL =  process.env.React_App_backendCall
export const baseURLFE = process.env.React_App_FrontendCall;
