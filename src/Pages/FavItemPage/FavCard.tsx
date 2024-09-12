import { FaCartPlus, FaTrash } from "react-icons/fa";
import { IProduct } from "../../interface/favMenu.interface";
import { useAppDispatch } from "../../Redux/hooks";
import { addItemToCart } from "../../Redux/feature/cartSlice/cartSlice";
import { ICartItem } from "../../interface/cartItem.iterface";

const FavCard = ({ itemData }: { itemData: IProduct }) => {
  const dispatch = useAppDispatch();
  const addToCart = (itemData: ICartItem) => {
    dispatch(addItemToCart(itemData));
  };
  return (
    <div className="border border-orange-400 rounded-lg flex p-3 gap-5 flex-wrap justify-between items-center relative ">
      <div className=" flex gap-2 items-center ">
        <div className="w-20 h-20 rounded-lg bg-red-500"></div>
        <div>
          <div className="font-bold text-nowrap text-orange-400">
            {itemData.title}
          </div>
          <div className="font-bold text-orange-400 ">
            <span className=" text-green-500">Category:</span>{" "}
            {itemData.category}
          </div>
        </div>
      </div>
      <div className="  ">
        <div className="font-semibold">
          <span className="text-green-500">Size: </span>{" "}
          {itemData.price[0].size.includes(":")
            ? itemData.price[0].size
            : `${itemData.price[0].size} inch`}
        </div>
        <div className="font-semibold">
          <span className="text-green-500">Price: </span>{" "}
          {itemData.price[0].price}
        </div>
      </div>

      <div className="ms-auto flex items-center   gap-5 md:ms-0">
        <button
          onClick={() =>
            addToCart({
              category: itemData.category,
              id: itemData._id,
              price: itemData.price[0].price,
              quantity: 1,
              size: itemData.price[0].size,
              title: itemData.title,
              photo: itemData.photo,
            })
          }
          className="btn border-none hover:bg-orange-500 text-white bg-orange-400 w-20 btn-sm"
        >
          <FaCartPlus></FaCartPlus>
        </button>
        <button className=" w-7  ms-auto h-7 flex justify-center text-sm items-center  text-red-500 bg-white hover:bg-red-500 hover:text-white duration-200 top-[-10px]  border border-red-500 p-1 rounded-full">
          <FaTrash></FaTrash>
        </button>
      </div>
    </div>
  );
};

export default FavCard;
