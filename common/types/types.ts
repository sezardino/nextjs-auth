export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
}

export type AppUser = Pick<User, "email" | "name" | "id" | "isActivated">;
export type AppUsers = Pick<User, "email" | "name">[];
export type RegistrationDto = Pick<User, "email" | "name" | "password">;
export type LoginDto = Pick<User, "email" | "password">;

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  tokens: Tokens;
  user: AppUser;
}

export type GetUsersResponse = AppUsers;
