import { FaHeart, FaShoppingCart } from "react-icons/fa";

const CartFavButton = () => {
  return (
    <>
      <div className="top-20 fixed flex flex-col gap-2 bg-orange-400 rounded-xl shadow-md ">
        <div className="indicator text-white  ">
          <span className="indicator-item badge badge-warning text-xs font-medium text-white">
            {"1"}
          </span>
          <button
            onClick={() => {}}
            className="p-3 text-lg hover:scale-90 hover:text-orange-100 duration-500"
          >
            <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
        <div className="indicator text-white ">
          <span className="indicator-item badge badge-success bg-green-600  text-xs font-medium text-white">
            {"1"}
          </span>
          <button
            onClick={() => {}}
            className="p-3 text-lg hover:scale-90 hover:text-orange-100 duration-500"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartFavButton;