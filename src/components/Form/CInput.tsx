/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  errorMsg?: string | false;
  type?: string;
  labelStyle?: string;
  placeholder?: string;
}

const CInput = ({
  name,
  label,
  errorMsg,
  type = "text",
  labelStyle,
  placeholder = "",
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${labelStyle}`}>{label}</span>
          </label>
          <input
            placeholder={placeholder}
            className="input input-sm input-bordered"
            type={type}
            min={0}
            {...register(name, { required: errorMsg })}
          />
        </div>

        {errors[name] && (
          <p className="text-red-500 text-sm">
            {(errors[name] as any).message}
          </p>
        )}
      </>
    </div>
  );
};

export default CInput;
