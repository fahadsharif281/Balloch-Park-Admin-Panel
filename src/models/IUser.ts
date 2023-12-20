export interface IUser {
  user: User | "";
  isLoading: boolean;
  error: string | unknown;
}

export interface User {
  message?: string;
  token?: string;
  _id?: string;
  email?: string;
  password?: string;
  error?: boolean;
}
export interface IUserServiceParams {
  email: string;
  password?: string;
}
