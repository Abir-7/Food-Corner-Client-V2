import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaCartPlus } from "react-icons/fa6";

const FoodCard = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint veniam maxime possimus sunt quia nostrum asperiores delectus, debitis tempora, voluptate, mollitia in consectetur! Ullam corrupti sapiente molestiae repellat deserunt!";
  return (
    <div className="">
      <div className="p-3  shadow-md rounded-lg max-w-[590px] ">
        <div className=" bg-[#ffefd2] rounded-lg">
          <div className="grid grid-cols-2 items-center">
            <div className="w-40 h-40 bg-red-400 m-4 rounded-md"></div>
            <div>
              <h1 className="my-2 font-bold text-lg">Food Name</h1>
              <Rating readOnly style={{ maxWidth: 100 }} value={4}></Rating>
              <p className="font-medium">
                {" "}
                {text.length > 45 ? text.slice(0, 45) + "..." : text}
              </p>
              <div className="flex justify-between my-1">
                <div className="flex gap-5">
                  <p>Price</p>
                  <p>Size</p>
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
