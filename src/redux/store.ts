import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import locationReducer from "./reducers/locationReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import contactUsReducer from "./reducers/contactUsReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  user: userReducer,
  location: locationReducer,
  dashboard: dashboardReducer,
  contactUs: contactUsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
