import { ReactNode } from "react";
import { decodeToken } from "../utils/decodeToken";
import { JwtPayload } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { userLogout } from "../Redux/feature/userSlice/userSlice";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({
  role,
  children,
}: {
  role: string;
  children: ReactNode;
}) => {
  let user;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    dispatch(userLogout());
    return <Navigate replace={true} to={"/user-login"}></Navigate>;
  }

  if (token) {
    user = decodeToken(token) as JwtPayload & {
      role: string;
      userEmail: string;
    };
  }

  if (user?.role !== role) {
    dispatch(userLogout());
    return <Navigate replace={true} to={"/user-login"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivetRoute;
