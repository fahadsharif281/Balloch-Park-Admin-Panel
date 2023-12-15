export interface IUser {
  user: User | "";
  isLoading: boolean;
  error: string | unknown;
}

export interface User {
  email: string;
  token: string;
}
export interface IUserServiceParams {
  email: string;
  password?: string;
}
