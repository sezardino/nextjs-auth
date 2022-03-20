import { AxiosResponse } from "axios";
import { GetUsersResponse, http, BackendEndpoints } from "@/common";

export class AuthService {
  static async getUsers(): Promise<AxiosResponse<GetUsersResponse[]>> {
    return http.get(BackendEndpoints.GET_USERS);
  }
}
