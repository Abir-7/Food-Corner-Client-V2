export interface IMenuItem {
  availableFor: {
    Breakfast: boolean;
    Dinner: boolean;
    Lunch: boolean;
  };
  category: string;
  createdAt: string; // Use Date type if you prefer to work with actual Date objects
  cuisine: string;
  description: string;
  isDeleted: boolean;
  photo: string;
  price: Array<{
    // Assuming price is an array of objects; specify properties if known
    size: string;
    price: number;
  }>;
  status: {
    availableQuantity: number;
    inStock: boolean;
  };
  title: string;
  updatedAt: string; // Use Date type if you prefer to work with actual Date objects
  __v: number;
  _id: string;
}
