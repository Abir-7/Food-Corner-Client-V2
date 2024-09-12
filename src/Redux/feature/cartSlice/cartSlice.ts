import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../../interface/cartItem.iterface";
import { cartItemCalculation } from "../../../utils/cartPriceCalculation";

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
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },

    increassItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },
    decreassItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const isItemExist = state.cartItems[itemIndex];
        isItemExist.quantity = isItemExist.quantity - 1;
        if (isItemExist.quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      const priceData = cartItemCalculation(state.cartItems);
      state.discount = priceData.discount;
      state.subTotal = priceData.subTotal;
      state.totalPrice = priceData.totalPrice;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, increassItem, decreassItem } = cartSlice.actions;

export default cartSlice.reducer;
