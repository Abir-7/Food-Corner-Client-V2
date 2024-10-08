export interface IMenuItem {
  availableFor: {
    Breakfast: boolean;
    Dinner: boolean;
    Lunch: boolean;
  };
  category: { _id: string; category: string };
  createdAt: string; // Use Date type if you prefer to work with actual Date objects
  cuisine: { _id: string; cuisine: string };
  description: string;
  isDeleted: boolean;
  photo: string;
  price: Array<{
    // Assuming price is an array of objects; specify properties if known
    size: string;
    price: number;
  }>;

  inStock: boolean;
  limitedStatus: {
    quantity: number | null;
    isLimited: boolean;
  };

  rating: { averageRating: number; ratingCount: number };
  title: string;
  updatedAt: string; // Use Date type if you prefer to work with actual Date objects
  __v: number;
  _id: string;
}

export interface ITimeBasedMenuData {
  result: IMenuItem[];
  availableTime: {
    breakfast: boolean;
    dinner: boolean;
    lunch: boolean;
  };
}
