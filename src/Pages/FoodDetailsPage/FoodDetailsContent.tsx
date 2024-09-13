/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IMenuItem } from "../../interface/menuItem.interface";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import { useAddFavMenuMutation } from "../../Redux/api/favMenuApi/favMenuApi";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { IApiResponse } from "../../Redux/interface/global.interface";
import { toast } from "sonner";
import { decodeToken } from "../../utils/decodeToken";
import { ICartItem } from "../../interface/cartItem.iterface";
import { addItemToCart } from "../../Redux/feature/cartSlice/cartSlice";
import { useState } from "react";
interface FoodDetailsContentProps {
  menuDetails: IMenuItem | undefined;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const FoodDetailsContent = ({
  menuDetails,
  index,
  setIndex,
}: FoodDetailsContentProps) => {
  const [amount, setAmount] = useState(1);

  const dispatch = useAppDispatch();
  const addToCart = (itemData: ICartItem) => {
    dispatch(addItemToCart(itemData));
  };

  const [addtoFav] = useAddFavMenuMutation();
  const { user, token } = useAppSelector((state) => state.auth);
  console.log(decodeToken(token as string));
  const addItemToFav = async (data: {
    product: string;
    customerEmail: string;
  }) => {
    const res = (await addtoFav(data)) as IApiResponse<any>;
    console.log(res);
    if (res.data?.success) {
      toast.success(res.data.message);
    }
  };
  return (
    <>
      {menuDetails ? (
        <div className="grid my-10 justify-items-center md:justify-items-stretch md:grid-cols-2 max-w-6xl mx-auto px-2">
          <div className="w-80 h-80 rounded-lg bg-red-400">
            <img
              className="w-80 h-80 rounded-lg object-cover"
              src={menuDetails?.photo}
              alt=""
            />
          </div>
          <div>
            {/* title section */}
            <h1 className="text-xl font-bold">{menuDetails?.title}</h1>
            {/* rating section */}
            <div className="flex gap-2 my-2">
              <Rating readOnly style={{ maxWidth: 100 }} value={4}></Rating>
              <span className="font-medium">{`(${0} Customer Review)`}</span>
            </div>
            {/* description section */}
            <p className="font-medium">{menuDetails?.description}</p>
            {/* category section */}
            <p>
              <span className="text-green-500 text-lg font-semibold ">
                Category:
              </span>{" "}
              <span className="text-orange-400 text-lg font-semibold ">
                {menuDetails?.category}
              </span>
            </p>
            {/* price & size section */}
            <div className="flex gap-10 my-2 items-center">
              <p className="text-orange-500 font-bold text-2xl">
                {menuDetails?.price[index].price}{" "}
                <span className="text-green-500">tk</span>
              </p>
              <div className="flex mt-1 gap-3">
                {menuDetails?.price.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      checked={index === i}
                      onChange={() => {
                        setIndex(i);
                      }}
                      type="radio"
                      name="radio-5"
                      className="radio radio-sm radio-success"
                    />
                    <p>{item.size}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mb-5 font-semibold">
              <span className="text-orange-500"> Status:</span>{" "}
              {menuDetails.status.inStock ? (
                <span className="text-green-500">available</span>
              ) : (
                <span className="text-red-500">unavailable</span>
              )}{" "}
            </p>
            {/* cart section */}
            <hr />
            <div className="my-5 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <button
                  disabled={amount == 0}
                  onClick={() => setAmount((prev) => prev - 1)}
                  className="w-10 h-7 text-white flex justify-center items-center bg-red-500 rounded-full btn btn-sm border-none hover:bg-red-600"
                >
                  <FaMinus></FaMinus>
                </button>
                <div>{amount}</div>
                <button
                  onClick={() => setAmount((prev) => prev + 1)}
                  className="w-10 h-7 btn btn-sm text-white flex justify-center items-center hover:bg-green-600 bg-green-500 rounded-full border-none"
                >
                  <FaPlus></FaPlus>
                </button>
              </div>
              <div>
                <button
                  disabled={amount <= 0}
                  onClick={() =>
                    addToCart({
                      category: menuDetails.category,
                      id: menuDetails._id,
                      price: menuDetails.price[index].price,
                      quantity: amount,
                      size: menuDetails.price[index].size,
                      title: menuDetails.title,
                      photo: menuDetails.photo,
                    })
                  }
                  className="btn btn-sm bg-orange-400 hover:bg-orange-500 duration-200 w-40  font-bold border-none text-white h-10 rounded-lg"
                >
                  Add Cart
                </button>
              </div>
              <div>
                {user?.userEmail && (
                  <button
                    onDoubleClick={() =>
                      addItemToFav({
                        customerEmail: user?.userEmail,
                        product: menuDetails._id,
                      })
                    }
                    className="p-2 hover:text-orange-400 rounded-full border-orange-400 flex justify-center items-center duration-200 hover:scale-90 text-lg"
                  >
                    <FaHeart></FaHeart>
                  </button>
                )}
              </div>
            </div>
            <hr />
            {/* other info */}

            <li className="list-item mt-2 mb-3 list-disc">
              Fast and Reliable Delivery
            </li>
          </div>
        </div>
      ) : (
        <p className="mt-10 text-xl font-semibold">No Data Found</p>
      )}
    </>
  );
};
