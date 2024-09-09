import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  errorMsg?: string | false;
  options: { value: string; label: string }[]; // Add options for select input
}

const CSelect = ({ name, label, errorMsg, options }: InputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: errorMsg }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">{label}</span>
              </label>
              {/* Replace input with select */}
              <select
                className="select select-sm input-bordered"
                {...field}
                value={field.value || ""}
              >
                <option key={null} value={""}>
                  Select Cuisine
                </option>
                {/* Map over options */}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CSelect;
