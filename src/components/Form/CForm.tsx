/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";

import { ReactNode } from "react";
import { IAddItemForm } from "../../interface/formData.interface";

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

  const submit = async (data: IAddItemForm) => {
    await onFormSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default CForm;
