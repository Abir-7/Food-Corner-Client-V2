import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import CartFavButton from "./CartFavButton";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        <CartFavButton></CartFavButton>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
