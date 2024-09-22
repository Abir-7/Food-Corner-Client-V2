import { useState } from "react";
import LoadingUi from "../../../../components/common/LoadingUi/LoadingUi";
import { OrderTable } from "../../../../components/common/Order/OrderTable";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { useGetAllUserOrdersQuery } from "../../../../Redux/api/orderApi/orderApi";

const Allorders = () => {
  const [filterOptions, setFilterOptions] = useState<
    { name: string; value: string }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<string>("");

  const queryOptions = {
    searchTerm,
    sort: sortOption,
    filters: filterOptions,
  };

  console.log(Object.keys(queryOptions));

  const { data, isLoading } = useGetAllUserOrdersQuery(queryOptions);

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
      <SectionHeader text="All users order"></SectionHeader>
      <div>
        <div className="flex gap-2 mt-2 mx-2">
          <input
            type="text"
            placeholder="Search by Transaction ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <div className="flex space-x-4">
            <select
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
              className="select  select-sm select-bordered w-full max-w-xs"
            >
              <option value="">Sort By</option>
              <option value="createdAt">Date (Newest First)</option>
              <option value="-createdAt">Date (Oldest First)</option>
            </select>

            <select
              onChange={handleFilterChange}
              className="select select-sm select-bordered w-full max-w-xs"
            >
              <option value="">Select Filter</option>
              <option value="deliveryStatus:pending">Pending</option>
              <option value="deliveryStatus:onGoing">Ongoing</option>
              {/* Add more filters as needed */}
            </select>
          </div>
        </div>

        {isLoading ? <LoadingUi /> : <OrderTable orders={data!} />}
      </div>
    </div>
  );
};

export default Allorders;
