import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "../../../types";

type BooksState = {
  books: IBook[];
  loading: boolean;
  error: string | null;
};

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    },
    addBook(state, action: PayloadAction<IBook>) {
      state.books.push(action.payload);
    },
    updateBook(state, action: PayloadAction<IBook>) {
      const idx = state.books.findIndex((b) => b._id === action.payload._id);
      if (idx !== -1) state.books[idx] = action.payload;
    },
    deleteBook(state, action: PayloadAction<string>) {
      state.books = state.books.filter((b) => b._id !== action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setBooks,
  addBook,
  updateBook,
  deleteBook,
  setLoading,
  setError,
} = booksSlice.actions;
export default booksSlice.reducer;
