import { ChangeEventHandler, ForwardedRef, MouseEventHandler } from "react";

interface InputDataProps {
  placeholder: string;
  type?: string | "text";
  name?: string;
  onChange: ChangeEventHandler;
  value: any;
}

const InputData = ({
  placeholder,
  type,
  name,
  onChange,
  value,
}: InputDataProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="w-full rounded items-center bg-gray-300 h-8 px-2 placeholder:text-sm"
      value={value}
    />
  );
};

export default InputData;
