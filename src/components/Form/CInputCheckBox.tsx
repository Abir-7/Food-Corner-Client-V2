import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  availableFor: string;
  errorMsg?: string | false;
  type: string;
  defaultChecked?: boolean; // Add this prop for default value
}

const CInputCheckBox = ({
  name,
  availableFor,
  errorMsg,
  defaultChecked = false,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultChecked} // Set default value here
        rules={{ required: errorMsg }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="form-control flex flex-row items-center gap-2">
              <input
                {...field}
                type="checkbox"
                checked={field.value} // Use field.value for controlled checkbox
                className="checkbox checkbox-warning checkbox-sm"
              />
              <label className="cursor-pointer label">
                <span className="label-text">{availableFor}</span>
              </label>
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CInputCheckBox;
