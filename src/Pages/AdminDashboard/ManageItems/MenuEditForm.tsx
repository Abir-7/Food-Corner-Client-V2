/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

import { IAddItemForm } from "../../../components/Form/CForm";
import AddEditForm from "../../../components/common/addItemEditItemForm/addEditForm";

const MenuEditForm = ({
  id,
  setPId,
}: {
  id: string | null;
  setPId: (id: string | null) => void;
}) => {
  const [eMsg, setEmsg] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  console.log(id);
  const onFormSubmit = async (data: IAddItemForm) => {
    console.log(data, id);

    setPreview(null);
    setPId(null);
    setEmsg(false);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-2 mt-5">
        <AddEditForm
          isRequired={false}
          eMsg={eMsg}
          setPreview={setPreview}
          preview={preview}
          onFormSubmit={onFormSubmit}
        ></AddEditForm>
      </div>
    </div>
  );
};

export default MenuEditForm;
