import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import ItemTable from "./ItemTable";

const ManageItem = () => {
  return (
    <div>
      <SectionHeader text="Manage Items"></SectionHeader>
      <div className="my-4">
        <ItemTable />
      </div>
    </div>
  );
};

export default ManageItem;
