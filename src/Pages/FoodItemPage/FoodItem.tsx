import FoodCard from "../../components/card/FoodCard";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { IMenuItem } from "../../interface/menuItem.interface";
import { useGetAllMenuQuery } from "../../Redux/api/menuApi/menuApi";

const FoodItem = () => {
  const { data: menuData } = useGetAllMenuQuery("");
  console.log(menuData);
  return (
    <>
      <SectionHeader text="Food Menu"></SectionHeader>{" "}
      {menuData ? (
        <div className="grid md:grid-cols-2 my-5 gap-4 xl:grid-cols-3 justify-items-center">
          {menuData.data.map((item: IMenuItem) => (
            <FoodCard item={item}></FoodCard>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FoodItem;
