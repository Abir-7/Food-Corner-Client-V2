import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FoodItem from "../Pages/FoodItemPage/FoodItem";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";

import { generatedRoute } from "../utils/routeGenerator";
import { userRouteOption } from "./userRoute/userRoute";
import DashboardLayout from "../Layouts/DashboardLayout.tsx/DashboardLayout";
import PrivetRoute from "../Layouts/PrivetRoute";
import { adminRouteOption } from "./userRoute/adminRoute/adminRoute";
import FoodDetails from "../Pages/FoodDetailsPage/FoodDetails";
import CartItems from "../Pages/CartPage/CartItems";
import FavItems from "../Pages/FavItemPage/FavItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/food-item",
        element: <FoodItem />,
      },
      { path: "/food-item/:id", element: <FoodDetails /> },
      {
        path: "/user-cart-items",
        element: <CartItems />,
      },
      {
        path: "/user-fav-items",
        element: (
          <PrivetRoute role="customer">
            <FavItems />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/customer",
    element: (
      <PrivetRoute role="customer">
        {" "}
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: generatedRoute(userRouteOption),
  },
  {
    path: "/admin",
    element: (
      <PrivetRoute role="admin">
        {" "}
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: generatedRoute(adminRouteOption),
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
