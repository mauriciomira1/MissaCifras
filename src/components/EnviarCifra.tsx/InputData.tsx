import { ChangeEventHandler, MouseEventHandler } from "react";

interface InputDataProps {
  placeholder: string;
  onChange?: ChangeEventHandler;
}

const InputData = ({ placeholder, onChange }: InputDataProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-full rounded bg-gray-100 h-8 px-2"
    />
  );
};

export default InputData;
