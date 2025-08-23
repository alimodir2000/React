import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return <p className="control">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} required {...props} />
  </p>;
};

export default Input;
