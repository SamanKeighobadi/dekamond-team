"use client";

import { UseFormRegister, FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  type: "text" | "email" | "password" | "number";
  register?: UseFormRegister<any>;
  isRequired?: boolean;
  error?: FieldError;
  disabeld?: boolean;
  value?: string | number;
}

const Input = (props: InputProps) => {
  const {
    label,
    name,
    type,
    isRequired,
    className,
    disabeld,
    placeholder,
    error,
    register,
  } = props;

  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {isRequired ? <span className="text-danger ms-1">*</span> : null}
      </label>
      <input
        type={type}
        className={`${className} form-control`}
        disabled={disabeld}
        id={name}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />

      {error && <p className="text-danger mt-1 ">{error.message}</p>}
    </div>
  );
};

export default Input;
