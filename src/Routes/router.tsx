import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FoodItem from "../Pages/FoodItemPage/FoodItem";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";

import { generatedRoute } from "../utils/routeGenerator";
import { userRouteOption } from "./userRoute/userRoute";
import DashboardLayout from "../Layouts/DashboardLayout.tsx/DashboardLayout";

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
    path: "/customer",
    element: <DashboardLayout />,
    children: generatedRoute(userRouteOption),
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
