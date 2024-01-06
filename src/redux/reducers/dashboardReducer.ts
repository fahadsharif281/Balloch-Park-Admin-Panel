import { createSlice } from "@reduxjs/toolkit";
import { IDashboardReducer } from "../../models/IDashboardRedcuer";
import { getAllMapLocations } from "../actions/dashboard.action";

const initialState: IDashboardReducer = {
  allMapLocations: "",
  isMapLocationLoading: false,
  mapLocationError: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMapLocations.pending, (state, action) => {
        state.isMapLocationLoading = true;
        state.mapLocationError = "";
      })
      .addCase(getAllMapLocations.fulfilled, (state, action) => {
        state.allMapLocations = action.payload;
        state.isMapLocationLoading = false;
        state.mapLocationError = ""; // Clear previous errors on pending
      })
      .addCase(getAllMapLocations.rejected, (state, action: any) => {
        state.isMapLocationLoading = false;
        state.mapLocationError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
