import { useState } from "react";
import { OrderTable } from "../../../../components/common/Order/OrderTable";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { useUserAllOrdersQuery } from "../../../../Redux/api/orderApi/orderApi";
import LoadingUi from "../../../../components/common/LoadingUi/LoadingUi";

const AllOrderbyUser = () => {
  const [filterOptions, setFilterOptions] = useState<
    { name: string; value: string }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  const queryOptions = {
    searchTerm,
    filters: filterOptions,
  };

  const { data, isLoading, isFetching } = useUserAllOrdersQuery(queryOptions, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const orders = data?.data || [];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const [name, filterValue] = value.split(":");
    setFilterOptions((prev) => {
      const existingFilter = prev.find((filter) => filter.name === name);
      if (existingFilter) {
        return prev.map((filter) =>
          filter.name === name ? { ...filter, value: filterValue } : filter
        );
      } else {
        return [...prev, { name, value: filterValue }];
      }
    });
  };

  return (
    <div>
      <SectionHeader text="Your Orders"></SectionHeader>
      {isLoading ? (
        <LoadingUi></LoadingUi>
      ) : (
        <div>
          <div className="flex gap-2 my-5 mx-2">
            <input
              type="text"
              placeholder="Search by Transaction ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-sm input-bordered w-full max-w-xs"
            />
            <div className="flex space-x-4">
              <select
                onChange={handleFilterChange}
                className="select select-sm select-bordered w-full max-w-xs"
              >
                <option value="">Filter by Order Status</option>
                <option value="deliveryStatus:pending">Pending</option>
                <option value="deliveryStatus:onGoing">Ongoing</option>
                <option value="deliveryStatus:delivered">Delivered</option>
              </select>
            </div>
          </div>
          <OrderTable isFetching={isFetching} orders={orders!}></OrderTable>
        </div>
      )}
    </div>
  );
};

export default AllOrderbyUser;
