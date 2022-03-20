import { AxiosResponse } from "axios";
import { GetUsersResponse, http, BackendEndpoints } from "@/common";

export class UsersService {
  static async getUsers(): Promise<AxiosResponse<GetUsersResponse>> {
    return http.instance.get(BackendEndpoints.GET_USERS);
  }
}
