import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBorrow } from "../../../types";

type BorrowState = {
  borrows: IBorrow[];
  loading: boolean;
  error: string | null;
};

const initialState: BorrowState = {
  borrows: [],
  loading: false,
  error: null,
};

const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setBorrows(state, action: PayloadAction<IBorrow[]>) {
      state.borrows = action.payload;
      state.loading = false;
      state.error = null;
    },
    addBorrow(state, action: PayloadAction<IBorrow>) {
      state.borrows.push(action.payload);
    },
    setBorrowLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setBorrowError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setBorrows,
  addBorrow,
  setBorrowLoading,
  setBorrowError,
} = borrowSlice.actions;
export default borrowSlice.reducer;
