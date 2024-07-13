import { FC } from "react";

interface ButtonOneProps {
  text: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
}

const ButtonOne: FC<ButtonOneProps> = ({ text, type, disabled, ...props }) => {
  return (
    <div className="flex flex-col justify-center isolate">
      <button disabled={disabled} type={type} className="buttonOne" {...props}>
        {text}
      </button>
    </div>
  );
};

export default ButtonOne;
