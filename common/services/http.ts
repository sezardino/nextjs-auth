import axios, { Axios } from "axios";
import { LSNames } from "@/common";
import { BackendEndpoints } from "../types";

class AxiosService {
  instance: Axios;
  clearInstance: Axios;

  constructor(baseURL: string | undefined) {
    if (!baseURL) {
      throw new Error("Base URL is required");
    }

    const AXIOS_BASE_PARAMETERS = {
      withCredentials: true,
      baseURL,
    };

    this.instance = axios.create(AXIOS_BASE_PARAMETERS);
    this.clearInstance = axios.create(AXIOS_BASE_PARAMETERS);

    this.addInterceptor();
  }

  private addInterceptor() {
    this.instance.interceptors.request.use((config) => {
      if (!config.headers) {
        return config;
      }

      config.headers.Authorization = `Bearer ${localStorage.getItem(
        LSNames.AUTH_TOKEN
      )}`;

      return config;
    });

    this.instance.interceptors.response.use(
      (config) => config,
      async (error) => {
        const originalResponse = error.config;
        if (
          error.response.status === 401 &&
          !originalResponse &&
          originalResponse._isRetry
        ) {
          throw error;
        }

        originalResponse._isRetry = true;

        try {
          const result = await this.clearInstance.get(BackendEndpoints.REFRESH);
          console.log(result);
          localStorage.setItem(
            LSNames.AUTH_TOKEN,
            result.data.tokens.accessToken
          );
          return this.instance.request(originalResponse);
        } catch (error: any) {
          console.log("unauthorized");
        }
      }
    );
  }
}

export const http = new AxiosService(process.env.NEXT_PUBLIC_API_URL);
