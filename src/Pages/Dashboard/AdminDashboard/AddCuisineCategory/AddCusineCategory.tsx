/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import CForm from "../../../../components/Form/CForm";
import CInput from "../../../../components/Form/CInput";

import { toast } from "sonner";
import { CFormButton } from "../../../../components/Form/CFormButton";
import {
  useAddCategoryMutation,
  useAddCuisineMutation,
} from "../../../../Redux/api/categoryCuisineApi/categoryCuisineApi";
import { IApiResponse } from "../../../../Redux/interface/global.interface";

const AddCusineCategory = () => {
  const [addCategory] = useAddCategoryMutation();
  const [addCuisine] = useAddCuisineMutation();

  const onFormSubmit = async (data: FieldValues) => {
    const { category, cuisine } = data;
    console.log({ category });
    if (!category && !cuisine) {
      toast.error("Please add at least one data");
    }

    const handleApiResponse = (res: IApiResponse<any>) => {
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
    };

    if (category) {
      const res = (await addCategory({ category })) as IApiResponse<any>;
      handleApiResponse(res);
    }

    if (cuisine) {
      const res2 = (await addCuisine({ cuisine })) as IApiResponse<any>;
      handleApiResponse(res2);
    }
  };

  return (
    <div>
      <SectionHeader text="Add Cuisine/Category"></SectionHeader>

      <div className="container mx-auto px-2">
        <CForm onFormSubmit={onFormSubmit}>
          <CInput
            placeholder="Add Category Name"
            name="category"
            label="Category"
          ></CInput>
          <CInput
            placeholder="Add Cuisine Name"
            name="cuisine"
            label="Cuisine"
          ></CInput>
          <CFormButton btnStyle="w-56" text="Add"></CFormButton>
        </CForm>
      </div>
    </div>
  );
};

export default AddCusineCategory;