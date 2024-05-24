import { requestStore } from "@/store/requestStore";
import { showLoader } from "@/utils/request";
import { toast } from 'react-toastify';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Constants
const baseUrl = "https://icapitalone.up.railway.app/";
const api = axios.create({
  baseURL: baseUrl, // Note the correct casing for the `baseURL` property
});

// Methods
function getAuthorizationHeader(): string | null {
  return localStorage.getItem("access");
}

function handleError(error: AxiosError): void {
  const { config, response } = error;

  toast.error(response?.data?.message ?? "Unable to Process Request");
  console.error("Error:", response?.status, response?.data);
}

api.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
  request.headers.Authorization = getAuthorizationHeader();

  if (request.url && showLoader(request.url)) {
    requestStore.updateRequests();
  }

  if (request.url) {
    request.url = `${baseUrl}${request.url}`;
  }

  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { config } = response;

    if (config.url && showLoader(config.url)) {
      requestStore.updateRequests(false);
    }

    return response;
  },
  (error: AxiosError) => {
    const { config } = error;

    if (config?.url && showLoader(config.url)) {
      requestStore.updateRequests(false);
    }

    handleError(error);
    return Promise.reject(error);
  }
);

export default api;
