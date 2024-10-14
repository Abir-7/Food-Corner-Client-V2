import LoadingUi from "../../../../components/common/LoadingUi/LoadingUi";
import ReactHelemt from "../../../../components/common/ReactHelmet/ReactHelemt";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { useGetAllMenuQuery } from "../../../../Redux/api/menuApi/menuApi";
import ItemTable from "./ItemTable";

const ManageItem = () => {
  const { data, isLoading } = useGetAllMenuQuery("");
  const menuItems = data?.data || [];
  return (
    <div>
      <ReactHelemt title=": Manage-Menu"></ReactHelemt>
      <SectionHeader text="Manage Items"></SectionHeader>
      {isLoading ? (
        <LoadingUi></LoadingUi>
      ) : (
        <ItemTable menuItems={menuItems!} />
      )}
    </div>
  );
};

export default ManageItem;
