import { Controller, useFieldArray, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  errorMsg?: string | false;
  labelStyle?: string;
}

const CInputArray = ({ name, errorMsg, labelStyle }: InputProps) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="form-control">
          <Controller
            name={`${name}.${index}.price`}
            control={control}
            rules={{ required: !!errorMsg && errorMsg }}
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className={`label-text ${labelStyle}`}>Price</span>
                  </label>
                  <input
                    className="input input-sm input-bordered"
                    {...field}
                    type="number"
                    min="0"
                  />
                </div>
                {error && <p className="text-red-500">{error.message}</p>}
              </>
            )}
          />
          <Controller
            name={`${name}.${index}.size`}
            control={control}
            rules={{ required: !!errorMsg && errorMsg }}
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="form-control mt-0.5">
                  <label className="label">
                    <span className={`label-text ${labelStyle}`}>
                      Size / Quantity
                    </span>
                  </label>
                  <input
                    className="input input-sm input-bordered"
                    {...field}
                    placeholder="example: 1:1,1:2 or 12,10,8 in inch"
                    type="text"
                  />
                </div>
                {error && <p className="text-red-500">{error.message}</p>}
              </>
            )}
          />
          <button
            className="btn bg-red-500 text-white mt-4 w-44 hover:bg-red-600 btn-sm"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              remove(index);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="btn text-white bg-green-500 hover:bg-green-600 btn-sm w-44 mt-4"
        type="button"
        onClick={() => append({ price: "", size: "" })}
      >
        Add Price & Size
      </button>
    </div>
  );
};

export default CInputArray;
