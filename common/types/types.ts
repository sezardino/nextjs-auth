export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type RegistrationDto = Pick<User, "email" | "name" | "password">;
export type LoginDto = Pick<User, "email" | "password">;

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  tokens: Tokens;
  user: Pick<User, "id" | "name" | "email">;
}

export type GetUsersResponse = Pick<User, "email" | "name">[];
