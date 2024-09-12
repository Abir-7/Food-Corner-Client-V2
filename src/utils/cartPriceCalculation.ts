import { ICartItem } from "../interface/cartItem.iterface";

export const cartItemCalculation = (cartItems: ICartItem[]) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = totalPrice >= 600 ? totalPrice * (5 / 100) : 0;
  const subTotal = totalPrice - discount;

  return {
    totalPrice,
    discount,
    subTotal,
  };
};
