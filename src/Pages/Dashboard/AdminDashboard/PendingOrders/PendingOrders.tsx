/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import LoadingUi from "../../../../components/common/LoadingUi/LoadingUi";
import { OrderTable } from "../../../../components/common/Order/OrderTable";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  useGetAllPendingOrdersQuery,
  useUpdateOrderMutation,
} from "../../../../Redux/api/orderApi/orderApi";
import { IApiResponse } from "../../../../Redux/interface/global.interface";

const PendingOrders = () => {
  const { data, isLoading } = useGetAllPendingOrdersQuery("");
  const [updateOrder] = useUpdateOrderMutation();

  const handleDeliveryStatus = async (orderId: string, status: string) => {
    const res = (await updateOrder({
      id: orderId,
      status: status,
    })) as IApiResponse<any>;

    if (res.data?.success) {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="p-6">
      <SectionHeader text="Pending Orders" />
      <div className="flex flex-col space-y-4 mt-4">
        {isLoading ? (
          <LoadingUi />
        ) : (
          <OrderTable
            handleDeliveryStatus={handleDeliveryStatus}
            orders={data!}
            isAction={true}
          />
        )}
      </div>
    </div>
  );
};

export default PendingOrders;
