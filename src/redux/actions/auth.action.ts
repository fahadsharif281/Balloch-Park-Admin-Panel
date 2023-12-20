import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../services/auth/Auth";
import { IUserServiceParams } from "../../models/IUser";

export const postLoginUserAsync = createAsyncThunk<any, any>(
  "user/postLoginUserAsync",
  async (params: IUserServiceParams, { rejectWithValue }) => {
    const { email, password } = params;
    try {
      const response = await loginService(email, password); // Assuming fetchUser returns a Promis
      return response.data; // Assuming the user data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the user data is in response.data
    }
  }
);
