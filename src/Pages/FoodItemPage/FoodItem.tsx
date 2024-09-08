import FoodCard from "../../components/card/FoodCard";

const FoodItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 xl:grid-cols-3 justify-items-center">
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
    </div>
  );
};

export default FoodItem;
