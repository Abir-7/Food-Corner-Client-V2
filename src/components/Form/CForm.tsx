/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";

import { ReactNode } from "react";
export interface IAddItemForm {
  title: string;
  description: string;
  category: string;
  price: { size: string; amount: number }[]; // Assuming it's an array for sizes and prices
  status: {
    availableQuantity: number;
  };
  availableFor: {
    Breakfast?: boolean;
    Dinner?: boolean;
    Lunch?: boolean;
  };
  cuisine: string;
  photo: File; // File input, can be changed to string if using URL after upload
}
interface MyFormProps {
  onFormSubmit: (data: IAddItemForm) => Promise<void>;
  children: ReactNode;
  defaultValues?: Record<string, unknown>;
  resolver?: any;
}
type TFormConfig = {
  defaultValues: Record<string, unknown>;
  resolver: any;
};
const CForm = ({
  children,
  defaultValues,
  resolver,
  onFormSubmit,
}: MyFormProps) => {
  const formConfig: TFormConfig = {
    defaultValues: {},
    resolver: undefined,
  };

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm<IAddItemForm>(formConfig);

  const submit = (data: IAddItemForm) => {
    onFormSubmit(data);
    // methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default CForm;
