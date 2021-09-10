import classNames from "classnames";
import { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  label?: string;
  errors?: {
    [x: string]: any;
  };
  fieldName: string;
  type?: string;
  id?: string;
}

const Input: FunctionComponent<Props> = ({ register, fieldName, label, errors, type, ...rest }) => {
  return (
    <div className={classNames("flex flex-col w-full space-y-1", { hidden: type === "file" })}>
      <span className="text-lg">{label}</span>
      <input
        type={type}
        {...rest}
        {...register(fieldName)}
        className="p-1 rounded-md bg-dark-400 focus:outline-none"
      />
      {errors[fieldName] && <p className="m-0 mt-1 text-red-600">{errors[fieldName].message}</p>}
    </div>
  );
};

export default Input;
