import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaCartPlus } from "react-icons/fa6";
import { IMenuItem } from "../../interface/menuItem.interface";

interface IProps {
  item: IMenuItem;
}
const FoodCard = ({ item }: IProps) => {
  return (
    <div className="">
      <div className="p-3  shadow-md rounded-lg max-w-[590px] ">
        <div className=" bg-[#ffefd2] rounded-lg">
          <div className="grid grid-cols-2 items-center">
            <div className="w-40 rounded-lg h-40 bg-red-400 m-4 ">
              <img
                className="w-40 rounded-lg h-40 object-cover"
                src={item.photo}
                alt=""
              />
            </div>
            <div>
              <h1 className="my-2 font-bold text-lg">{item?.title}</h1>
              <Rating readOnly style={{ maxWidth: 100 }} value={4}></Rating>
              <p className="font-medium">
                {" "}
                {item?.description.length > 45
                  ? item.description.slice(0, 45) + "..."
                  : item?.description}
              </p>
              <div className="flex justify-between my-1">
                <div className="flex gap-5">
                  <p className="font-bold text-green-500 ">
                    {item.price[0].price}{" "}
                    <span className="text-orange-400">Tk</span>
                  </p>
                  <p className="font-bold text-green-500 ">
                    {item.price[0].size}{" "}
                  </p>
                </div>
                <div>
                  <button className="me-10">
                    <FaCartPlus className="text-orange-400 text-lg"></FaCartPlus>
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
