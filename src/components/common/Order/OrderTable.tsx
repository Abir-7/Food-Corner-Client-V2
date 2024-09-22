import { IOrderResponse } from "../../../interface/order.interface";

interface OrderTableProps {
  orders: IOrderResponse[]; // Correctly specify orders as IOrderResponse[]
  isAction?: boolean;
  handleDeliveryStatus?: (orderId: string, status: string) => Promise<void>;
}

export const OrderTable = ({
  orders,
  isAction = false,
  handleDeliveryStatus,
}: OrderTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Product Details</th>
            <th>Subtotal Price</th>
            <th>Transaction ID</th>
            <th>Payment Status</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order._id}>
              <td>{order.customerId.email}</td>
              <td className="min-w-72">
                <ul>
                  {order.items?.map((item) => (
                    <li key={item._id} className="flex items-center">
                      <img
                        src={item.productId.photo}
                        alt={item.productId.title}
                        className="w-16 h-16 mr-2 my-0.5"
                      />
                      <span>
                        {item.productId.title} (Size: {item.size}, Quantity:{" "}
                        {item.quantity})
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.total.subTotal}tk</td>
              <td>{order.transectionId}</td>
              <td>{order.paymentStatus}</td>
              <td className="min-w-40">
                {isAction && !!handleDeliveryStatus ? (
                  <select
                    onChange={(e) => {
                      handleDeliveryStatus(order._id, e.target.value);
                    }}
                    defaultValue={order.deliveryStatus} // Corrected the spelling here
                    className="select select-sm select-bordered w-full max-w-xs"
                  >
                    <option value="pending">Pending</option>
                    <option value="onGoing">Ongoing</option>
                    <option value="delivered">Delivered</option>
                  </select>
                ) : (
                  <p>{order.deliveryStatus}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
