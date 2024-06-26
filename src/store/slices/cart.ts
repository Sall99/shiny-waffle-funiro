import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types";
import { RootState } from "../store";
import toast from "react-hot-toast";

export interface ICart {
  items: IProduct[];
  subTotal: number;
}

const initialState: ICart = {
  items: [],
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: IProduct; message: string }>,
    ) => {
      const { product, message } = action.payload;

      const item = state.items.find((item) => item.id === product?.id);
      if (item) {
        item.amount = (item.amount || 0) + 1;
        toast.success(`${message}`);
      } else {
        state.items.push({ ...product, amount: 1 });
        toast.success(message);
      }
      state.subTotal = state.items.reduce(
        (acc, item) => acc + item.price * (item.amount || 1),
        0,
      );
    },
    incrementAmount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount = (item.amount || 0) + 1;
        toast.success(`Increased quantity`);
      }
      state.subTotal = state.items.reduce(
        (acc, item) => acc + item.price * (item.amount || 1),
        0,
      );
    },
    decrementAmount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.amount) {
        item.amount -= 1;
        if (item.amount === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
      state.subTotal = state.items.reduce(
        (acc, item) => acc + item.price * (item.amount || 1),
        0,
      );
    },
    setAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>,
    ) => {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount = amount;
      }
      state.subTotal = state.items.reduce(
        (acc, item) => acc + item.price * (item.amount || 1),
        0,
      );
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; message: string }>,
    ) => {
      const { id, message } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      toast.success(message);
      state.subTotal = state.items.reduce(
        (acc, item) => acc + item.price * (item.amount || 1),
        0,
      );
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = createSelector(selectCart, (cart) => cart.items);
export const selectCartSubtotal = createSelector(
  selectCart,
  (cart) => cart.subTotal,
);

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  removeFromCart,
  setAmount,
} = cartSlice.actions;
