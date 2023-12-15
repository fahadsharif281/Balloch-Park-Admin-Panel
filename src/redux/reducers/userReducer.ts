import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { postLoginUserAsync } from '../actions/UserLogin.action';

const initialState: IUser = {
    user: '',
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(postLoginUserAsync.pending, (state) => {
                state.isLoading = true;
                state.error = ''; // Clear previous errors on pending
            })
            builder.addCase(postLoginUserAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            builder.addCase(postLoginUserAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export const { resetUser } = userSlice.actions;


export default userSlice.reducer;
