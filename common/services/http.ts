import axios, { Axios } from "axios";

class AxiosService {
  instance: Axios;

  constructor(baseURL: string | undefined) {
    if (!baseURL) {
      throw new Error("Base URL is required");
    }

    this.instance = axios.create({
      withCredentials: true,
      baseURL,
    });
    this.addInterceptor();
  }

  private addInterceptor() {
    this.instance.interceptors.request.use((config) => {
      if (!config.headers) {
        return config;
      }

      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "auth-token"
      )}`;

      return config;
    });
  }
}

export const http = new AxiosService(process.env.API_URL).instance;
