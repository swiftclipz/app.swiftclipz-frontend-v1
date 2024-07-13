import { FC, ChangeEvent, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface PasswordLabelProps {
  id: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordLabel: FC<PasswordLabelProps> = ({
  label,
  id,
  name,
  required,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <label htmlFor={id} className="text-text block my-2">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 outline-none rounded-lg border border-black bg-whiteF5"
        />
        <span
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl cursor-pointer text-[#B4B1B1]"
          onClick={togglePassword}
        >
          {showPassword ? <LuEye /> : <LuEyeOff />}
        </span>
      </div>
    </div>
  );
};

export default PasswordLabel;
