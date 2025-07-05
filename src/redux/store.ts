import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/books/bookSlice";
import borrowReducer from "./features/borrow/borrowSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    books: bookReducer,
    borrows: borrowReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;