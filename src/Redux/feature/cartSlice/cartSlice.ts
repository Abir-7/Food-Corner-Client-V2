import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { ICartItem } from "../../../interface/cartItem.iterface";
import { cartItemCalculation } from "../../../utils/cartPriceCalculation";

export interface ICartItem {
  title: string;
  id: string;
  category: string;
  size: string;
  price: number;
  quantity: number;
  photo: string;
}

interface ICartState {
  cartItems: ICartItem[];
  discount: number;
  totalPrice: number;
  subTotal: number;
}

const initialState: ICartState = {
  cartItems: [],
  discount: 0,
  totalPrice: 0,
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id, size, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (itemIndex !== -1) {
        // Item with the same ID and size exists, increment the quantity
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        // Item with the same ID but different size, add as a new entry
        state.cartItems.push(action.payload);
      }

      // Update prices after adding item
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },

    increassItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },
    decreassItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemIndex !== -1) {
        const isItemExist = state.cartItems[itemIndex];
        isItemExist.quantity -= 1;
        if (isItemExist.quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems.splice(itemIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, increassItem, decreassItem, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
