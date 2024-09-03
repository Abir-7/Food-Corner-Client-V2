import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FoodItem from "../Pages/FoodItem/FoodItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/food-item", element: <FoodItem /> },
    ],
  },
]);
