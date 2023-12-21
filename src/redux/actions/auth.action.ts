import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../services/auth/Auth";
import { IUserServiceParams } from "../../models/IUser";

export const postLoginUserAsync = createAsyncThunk<any, any, any>(
  "user/postLoginUserAsync",
  async (params: IUserServiceParams, { rejectWithValue }) => {
    const { email, password, navigate } = params;
    try {
      const response = await loginService(email, password); // Assuming fetchUser returns a Promise
      if (response !== undefined && !response?.data?.error) {
        navigate("/home");
        return response.data;
      } else {
        return rejectWithValue(response?.data);
      }
      // Assuming the user data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the user data is in response.data
    }
  }
);
