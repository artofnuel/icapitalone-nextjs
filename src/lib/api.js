import { updateRequests, showLoader } from "@/utils/request";
import axios from "axios";

// constants
const baseUrl = "https://icapitalone.up.railway.app/auth";
const api = axios.create({
  baseUrl: baseUrl,
});
// methods
function getAuthorizationHeader() {
  return localStorage.getItem("access");
}
function handleError(error) {
  const { config, response } = error;
}

api.interceptors.request.use((request) => {
  request.headers.Authorization = getAuthorizationHeader();

  if (showLoader(request.url)) {
    updateRequests();
  }
  return request;
});

api.interceptors.response.use(
  (response) => {
    request.headers.Authorization = getAuthorizationHeader();

    if (showLoader(response.config.url)) {
      updateRequests(false);
    }
    return response;
  },
  (error) => {
    if (showLoader(error.config.url)) {
      updateRequests(false);
    }
    handlerError(error);
  }
);
export default api;
