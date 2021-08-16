import { InputHTMLAttributes } from "react";
import { DetailedHTMLProps, FC } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  error?: any;
}

const Input: FC<Props> = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      {label && <span className="text-lg">{label}</span>}
      <input
        {...rest}
        // {...register(fieldName)}
        className="p-1 rounded-md bg-dark-400 focus:outline-none"
      />

      <p className="m-0 mt-1 text-red-600">{error?.message}</p>
    </div>
  );
};

export default Input;
