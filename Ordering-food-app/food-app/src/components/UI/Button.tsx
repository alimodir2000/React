import React, { type ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  textOnly?: boolean;
  className?: string;
}

const Button = ({ children, textOnly, className, ...props }: ButtonProps) => {
  var cssClass = textOnly ? "text-button" : "button";
  cssClass += " " + className;
  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
