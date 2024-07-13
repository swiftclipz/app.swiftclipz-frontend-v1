import { FC, ChangeEvent } from "react";

interface InputLabelProps {
  id: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder?: string;
  value?: string | number;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel: FC<InputLabelProps> = ({
  label,
  id,
  name,
  type,
  required,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-text block my-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 outline-none rounded-lg border border-black bg-whiteF5"
      />
    </div>
  );
};

export default InputLabel;
