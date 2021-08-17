import { Inputs } from "@components/Auth";
import { InputHTMLAttributes } from "react";
import { DetailedHTMLProps, FC } from "react";
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  register: UseFormRegister<Inputs>;
  fieldName: "name" | "username" | "email" | "password";
  errors: DeepMap<Inputs, FieldError>;
}

const Input: FC<Props> = ({ label, errorMessage, errors, register, fieldName, ...rest }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      {label && <span className="text-lg">{label}</span>}
      <input
        {...rest}
        {...register(fieldName)}
        className="p-1 rounded-md bg-dark-400 focus:outline-none"
      />

      {errors[fieldName] && <p className="m-0 mt-1 text-red-600">{errors[fieldName]?.message}</p>}
    </div>
  );
};

export default Input;
