import { makeAutoObservable } from "mobx";
import {
  AuthService,
  LoginDto,
  LSNames,
  RegistrationDto,
  AppUser,
  AppUsers,
} from "@/common";
import { UsersService } from "../services/user";

export class Store {
  user = {} as AppUser;
  users: AppUsers = [];
  isAuth = false;
  isLoading = false;
  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(payload: AppUser): void {
    this.user = payload;
  }

  setUsers(payload: AppUsers): void {
    this.users = payload;
  }

  setAuth(flag: boolean): void {
    this.isAuth = flag;
  }

  setLoading(flag: boolean): void {
    this.isLoading = flag;
  }

  setError(payload: string): void {
    this.error = payload;
  }

  async registration(dto: RegistrationDto) {
    this.setLoading(true);

    try {
      const result = await AuthService.registration(dto);
      console.log(result);
      localStorage.setItem(LSNames.AUTH_TOKEN, result.data.tokens.accessToken);
      this.setAuth(true);
      this.setUser(result.data.user);
    } catch (error: any) {
      console.log(error);
      console.log(error.response?.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async login(dto: LoginDto) {
    this.setLoading(true);

    try {
      const result = await AuthService.login(dto);
      console.log(result);
      localStorage.setItem(LSNames.AUTH_TOKEN, result.data.tokens.accessToken);
      this.setAuth(true);
      this.setUser(result.data.user);
    } catch (error: any) {
      console.log(error.response?.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async logout() {
    console.log(1);
    this.setLoading(true);

    try {
      await AuthService.logout();
      localStorage.removeItem(LSNames.AUTH_TOKEN);
      this.setAuth(false);
      this.setUser({} as AppUser);
    } catch (error: any) {
      console.log(error.response?.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async checkAuth() {
    this.setLoading(true);

    try {
      const result = await AuthService.refresh();
      console.log(result);
      localStorage.setItem(LSNames.AUTH_TOKEN, result.data.tokens.accessToken);
      this.setAuth(true);
      this.setUser(result.data.user);
    } catch (error: any) {
      console.log(error.response?.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async getUsers() {
    this.setLoading(true);

    try {
      const result = await UsersService.getUsers();
      this.setUsers(result.data);
    } catch (error: any) {
      console.log(error.response?.data.message);
    } finally {
      this.setLoading(false);
    }
  }
}
