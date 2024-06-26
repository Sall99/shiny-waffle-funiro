import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types";
import { RootState } from "../store";
import toast from "react-hot-toast";

export interface IFavoris {
  items: IProduct[];
}

const initialState: IFavoris = {
  items: [],
};

export const favorisSlice = createSlice({
  name: "favoris",
  initialState,
  reducers: {
    addToFavoris: (
      state,
      action: PayloadAction<{ product: IProduct; message: string }>,
    ) => {
      const { product, message } = action.payload;

      const item = state.items.find((item) => item.id === product?.id);
      if (item) {
        toast.success(`${message}`);
      } else {
        state.items.push({ ...product });
        toast.success(message);
      }
    },

    removeFromFavoris: (
      state,
      action: PayloadAction<{ id: string; message: string }>,
    ) => {
      const { id, message } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      toast.success(message);
    },
  },
});

export const selectFavoris = (state: RootState) => state.favoris;
export const selectFavorisItems = createSelector(
  selectFavoris,
  (favoris) => favoris.items,
);

export const favorisReducer = favorisSlice.reducer;
export const { addToFavoris, removeFromFavoris } = favorisSlice.actions;
