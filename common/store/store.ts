import { User } from "@/common";
import { makeAutoObservable } from "mobx";

export class Store {
  user = {} as User;
  users: User[] = [];
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  registration() {}

  login() {}

  logout() {}

  checkAuth() {}

  getUsers() {}
}
