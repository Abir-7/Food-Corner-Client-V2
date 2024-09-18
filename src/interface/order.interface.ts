export interface IOrderDetailsData {
  total: {
    totalPrice: number;
    discount: number;
    subTotal: number;
  };
  items: {
    productId: string;
    quantity: number;
  }[];
}
