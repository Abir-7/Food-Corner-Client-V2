import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FoodItem from "../Pages/FoodItemPage/FoodItem";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/food-item", element: <FoodItem /> },
    ],
  },
  {
    path: "/user-login",
    element: <Login></Login>,
  },
  {
    path: "/user-signup",
    element: <Signup></Signup>,
  },
]);
