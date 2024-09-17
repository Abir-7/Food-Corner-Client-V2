import CartCard from "./CartCard";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { useAppSelector } from "../../Redux/hooks";

const CartItems = () => {
  const { cartItems, totalPrice, discount, subTotal } = useAppSelector(
    (state) => state.cart
  );
  return (
    <div>
      <SectionHeader text="Your Cart"></SectionHeader>
      <div className="p-2  container  mx-auto gap-10 grid md:grid-cols-3 justify-items-center md:justify-items-stretch ">
        <div className="md:col-span-2 rounded-md p-2 my-5  shadow-inner overflow-y-auto w-full max-h-[60vh] custom-scrollbar">
          <div className="  flex flex-col gap-3 ">
            {cartItems.length == 0 && (
              <p className="text-center text-red-500 text-xl font-bold mt-3">
                You have no item in cart
              </p>
            )}
            {cartItems?.map((itemData) => (
              <CartCard key={itemData.id} itemData={itemData}></CartCard>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-xl text-center font-bold text-orange-400">
            Cart Total
          </h1>
          <hr className="my-2" />
          <div className="flex justify-between">
            <h2>Total:</h2>
            <p>
              {totalPrice} <span>tk</span>
            </p>
          </div>
          <div className="flex justify-between">
            <h2>Discount:</h2>
            <p>
              {discount} <span>tk</span>
            </p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <h2>Subtotal:</h2>
            <p>
              {subTotal} <span>tk</span>
            </p>{" "}
          </div>
          <button
            disabled={cartItems?.length == 0}
            className=" mt-2 w-full btn btn-sm bg-orange-400 hover:bg-orange-500  border-none text-white duration-200"
          >
            Proseed to Pay
          </button>
          <li className="list mt-4 text-green-500 font-semibold list-disc">
            Get 5% discount over 600tk
          </li>
        </div>
      </div>
    </div>
  );
};

export default CartItems;