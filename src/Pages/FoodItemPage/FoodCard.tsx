import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaCartPlus } from "react-icons/fa6";
import { IMenuItem } from "../../interface/menuItem.interface";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addItemToCart } from "../../Redux/feature/cartSlice/cartSlice";
import { ICartItem } from "../../interface/cartItem.iterface";
import { decodeToken } from "../../utils/decodeToken";
import { JwtPayload } from "jwt-decode";

interface IProps {
  item: IMenuItem;
}
const FoodCard = ({ item }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);
  const user = decodeToken(token) as JwtPayload & {
    userEmail: string;
    role: string;
  };

  const dispatch = useAppDispatch();
  const addToCart = (itemData: ICartItem) => {
    dispatch(addItemToCart(itemData));
  };
  return (
    <div className="">
      <div className="p-3 shadow-md rounded-lg w-[530px] ">
        <div className="shadow-inner  rounded-lg">
          <div className="grid grid-cols-2 items-center">
            <div className="w-40 rounded-lg h-40 bg-orange-400 m-4 ">
              <img
                className="w-40 rounded-lg h-40 object-cover"
                src={item?.photo}
                alt=""
              />
            </div>
            <div>
              <Link to={`/food-item/${item?._id}`}>
                {" "}
                <h1 className="my-2 duration-200 text-green-500 hover:text-orange-400 font-bold text-lg">
                  {item?.title}
                </h1>
              </Link>

              <Rating
                readOnly
                style={{ maxWidth: 100 }}
                value={item?.rating.averageRating}
              ></Rating>
              <p className="font-medium">
                {" "}
                {item?.description.length > 45
                  ? item.description.slice(0, 45) + "..."
                  : item?.description}
              </p>
              <div className="flex justify-between my-1">
                <div className="flex gap-5">
                  <p className="font-bold text-green-500 ">
                    {item?.price[0].price}{" "}
                    <span className="text-orange-400">Tk</span>
                  </p>
                  <p className="font-bold text-green-500 ">
                    {item?.price[0].size}{" "}
                  </p>
                </div>
                <div>
                  <button
                    disabled={user?.role === "admin"}
                    onClick={() =>
                      addToCart({
                        category: item.category.category,
                        id: item?._id,
                        price: item?.price[0].price,
                        quantity: 1,
                        size: item.price[0].size,
                        title: item?.title,
                        photo: item?.photo,
                      })
                    }
                    className="me-10  "
                  >
                    <FaCartPlus
                      className={
                        user?.role === "admin"
                          ? "text-gray-400"
                          : "text-orange-400 text-lg hover:scale-110 duration-200 active:scale-100"
                      }
                    ></FaCartPlus>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
