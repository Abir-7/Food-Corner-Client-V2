import { useState } from "react";
import FoodCard from "./FoodCard";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { IMenuItem } from "../../interface/menuItem.interface";
import { useGetAllMenuQuery } from "../../Redux/api/menuApi/menuApi";
import LoadingUi from "../../components/common/LoadingUi/LoadingUi";
import PaginationUi from "../../components/common/pagination/PaginationUi";

const FoodItem = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    sort: "",
    minPrice: "",
    maxPrice: "",
    page: 1,
    limit: 1,
  });

  const { data: menuData, isLoading } = useGetAllMenuQuery(filters, {
    refetchOnMountOrArgChange: true,
  });

  console.log(menuData);

  // Handle filter changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 1 })); // Reset page to 1 on filter change
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <>
      <SectionHeader text="Food Menu" />

      {/* Search and Filter Section */}
      <div className="flex mx-2 flex-col sm:flex-row items-center my-5">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search by title"
          value={filters.searchTerm}
          onChange={handleFilterChange}
          className="input input-sm input-bordered w-full sm:w-1/3 mr-2"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="select select-sm select-bordered w-full sm:w-1/3 mr-2"
        >
          <option value="">Filter by Category</option>
          <option value="Rice">Rice</option>
          <option value="Italian">Italian</option>
          {/* Add more categories as needed */}
        </select>
        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
          className="select select-sm select-bordered w-full sm:w-1/3"
        >
          <option value="">Sort by price</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
        </select>
      </div>

      <div className="flex mx-2 mb-5">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="input input-sm input-bordered w-full sm:w-1/3 mr-2"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="input input-sm input-bordered w-full sm:w-1/3"
        />
      </div>

      {!isLoading ? (
        <>
          <div className="grid md:grid-cols-2 min-h-[500px] my-5 gap-4 xl:grid-cols-3 justify-items-center relative">
            {menuData?.data?.map((item: IMenuItem) => (
              <FoodCard key={item._id} item={item} />
            ))}

            {menuData?.data?.length === 0 && (
              <p className="my-5 absolute text-xl font-bold text-orange-400 text-center">
                No Data to Display
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="grid justify-items-center   my-5">
            <PaginationUi
              currentPage={filters.page}
              totalPages={menuData?.meta?.totalPage || 1}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <LoadingUi />
      )}
    </>
  );
};

export default FoodItem;
