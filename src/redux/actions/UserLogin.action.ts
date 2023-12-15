import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginService } from "../../services/auth/Auth"
import { IUserServiceParams} from '../../models/IUser';

export const postLoginUserAsync = createAsyncThunk<any, any>('user/fetchUserLoginApi', async (params: IUserServiceParams, thunkAPI) => {
      const {email, password}=params;
      const response = await loginService(email,password); // Assuming fetchUser returns a Promis
      return response.data // Assuming the user data is in response.data
});
