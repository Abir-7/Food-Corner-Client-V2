/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Navigate, useNavigate } from "react-router-dom";
import bg1 from "../../assets/login.jpg";
import { FaArrowLeft } from "react-icons/fa";
import loginImage from "../../assets/login3.jpg";
import CForm from "../../components/Form/CForm";
import CInput from "../../components/Form/CInput";
import { FieldValues } from "react-hook-form";
import { IApiResponse } from "../../Redux/interface/global.interface";
import { useLoginUserMutation } from "../../Redux/api/authApi/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/feature/userSlice/userSlice";
import { decodeToken } from "../../utils/decodeToken";
import { JwtPayload } from "jwt-decode";
import { useAppSelector } from "../../Redux/hooks";

const Login = () => {
  const userData = useAppSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin] = useLoginUserMutation();
  const onFormSubmit = async (data: FieldValues) => {
    const res = (await userLogin(data)) as IApiResponse<any>;

    if (res.data?.success) {
      toast.success(res.data.message);
      const userData = decodeToken(res.data.data?.token) as JwtPayload & {
        role: string;
        userEmail: string;
      };

      dispatch(setUser({ user: userData, token: res.data.data?.token }));
      navigate("/");
    }
  };

  if (userData?.userEmail) {
    return <Navigate to="/" replace />; // Redirect to home page or any other route
  }

  return (
    <div
      className="min-w-full"
      style={{ backgroundImage: `url(${bg1})`, minHeight: "100vh" }}
    >
      <div className="backdrop-blur-sm   w-[100%] min-h-screen p-5 ">
        {" "}
        <Link className="flex  items-center gap-1 text-orange-400" to="/">
          <FaArrowLeft />
          Back to Home
        </Link>
        <div className="flex items-center justify-center p-10 md:p-16">
          <div className="flex flex-col-reverse lg:flex-row  items-center w-[100%]  lg:w-3/4  ">
            <div className=" flex justify-center lg:justify-normal  md:w-1/2 ">
              <img src={loginImage} className=" w-5/6 rounded-lg " alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl text-orange-400 font-semibold text-center">
                Login
              </h1>
              {/* form */}
              <CForm onFormSubmit={onFormSubmit}>
                <CInput
                  labelStyle="text-orange-400 font-semibold drop-shadow-sm"
                  name="email"
                  label="User Email"
                  type="text"
                  errorMsg="User email is requiered"
                ></CInput>{" "}
                <CInput
                  labelStyle="text-orange-400 font-semibold drop-shadow-sm"
                  name="password"
                  label="User Password"
                  type="password"
                  errorMsg="User password is required is requiered"
                ></CInput>
                <button
                  type="submit"
                  className="btn my-5 btn-sm text-white bg-orange-400 border-none "
                >
                  Login
                </button>
              </CForm>
              <h1 className="text-center text-white font-semibold">
                Don't Have a account?{" "}
                <Link to={"/user-signup"}>Click Here</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
