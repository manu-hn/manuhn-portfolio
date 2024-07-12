// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "@/store/slice/themeSlice";

// Configure the store
export const store = configureStore({
  reducer: { theme: themeSliceReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


