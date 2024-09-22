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

export interface IOrderResponse {
  _id: string;
  customerId: {
    _id: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    email: string;
    contactNo: number;
    address: string;
  };
  items: {
    productId: {
      photo: string;
      _id: string;
      title: string;
      category: string;
      price: {
        price: number;
        size: string;
        _id: string;
      }[];
    };
    quantity: number;
    size: string;
    _id: string;
  }[];
  transectionId: string;
  total: {
    totalPrice: number;
    discount: number;
    subTotal: number;
  };
  isCancel: boolean;
  paymentStatus: string;
  deliveryStatus: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
