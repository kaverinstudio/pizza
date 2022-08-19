import {createSlice} from "@reduxjs/toolkit";
// @ts-ignore
import {getCartItem} from "../../utils/getCartItem.ts";

type CartItem = {
  id: string;
  title: string;
  type: number;
  size: number;
  count: number;
  imageUrl: string;
  price: number;
}

interface CartSliceState {
  items: CartItem[]
}

const initialState: CartSliceState = {
  items: getCartItem()
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, actions) => {
      const findItem = state.items.find((ojb) => ojb.id === actions.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...actions.payload,
          count: 1,
        });
      }
    },
    removeItems: (state, actions) => {
      state.items = state.items.filter((obj) => obj.id !== actions.payload);
    },
    minusItems: (state, actions) => {
      const findItem = state.items.find((ojb) => ojb.id === actions.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});


export const {addItems, removeItems, clearCart, minusItems } =
  cartSlice.actions;

export default cartSlice.reducer;
