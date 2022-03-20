import { AxiosResponse } from "axios";
import {
  LoginDto,
  RegistrationDto,
  User,
  http,
  Tokens,
  AuthResponse,
  BackendEndpoints,
} from "@/common";

export class AuthService {
  static async registration(
    dto: RegistrationDto
  ): Promise<AxiosResponse<AuthResponse>> {
    return await http.post<AuthResponse>(BackendEndpoints.REGISTRATION, dto);
  }

  static async login(dto: LoginDto): Promise<AxiosResponse<AuthResponse>> {
    return await http.post<AuthResponse>(BackendEndpoints.LOGIN, dto);
  }

  static async logout(): Promise<void> {
    return await http.get(BackendEndpoints.LOGOUT);
  }

  static async refresh() {}
}
