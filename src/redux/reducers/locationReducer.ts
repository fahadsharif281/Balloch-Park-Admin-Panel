import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { ILoactionReducer } from "../../models/ILocationReducer";
import { store } from "../store";
import { getAllLocationsByType } from "../actions/locations.action";

const initialState: ILoactionReducer = {
  allLocations: "",
  isLoading: false,
  error: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    resetLocation: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationsByType.pending, (state) => {
        state.isLoading = true;
        state.error = ""; // Clear previous errors on pending
      })
      .addCase(getAllLocationsByType.fulfilled, (state, action) => {
        state.allLocations = action.payload;
        state.isLoading = false;
        state.error = ""; // Clear previous errors on pending
      })
      .addCase(getAllLocationsByType.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetLocation } = locationSlice.actions;

export default locationSlice.reducer;
