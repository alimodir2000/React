import React, { isValidElement, useMemo, useState } from "react";
import style from "./CreateUser.module.css";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface FormInputValidation {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface IsTouched {
  name: boolean;
  email: boolean;
  phone: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export function IsEmailValid(str: string): boolean {
  if (!str) return false;
  const pattern = /[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\.[A-Za-z0-9-_]{2,}/gi;
  return pattern.test(str);
}

export function IsPhoneValid(str: string): boolean {
  if (!str) return false;
  if (str.length > 10 && str.length < 13) return true;
  return false;
}

export function IsPasswordValid(str: string): boolean {
  if (!str) return false;

  if (str.length < 8) return false;

  const atLeastOneUppercasePattern = /[A-Z]+/g;
  if (!atLeastOneUppercasePattern.test(str)) return false;

  const atLeastOneNonAlphaNumerciPattern = /[^A-Za-z0-9]+/g;
  if (!atLeastOneNonAlphaNumerciPattern.test(str)) return false;

  return true;
}

export default function CreateUser() {
  const [isTouched, setIsTouched] = useState<IsTouched>({
    phone: false,
    confirmPassword: false,
    email: false,
    name: false,
    password: false,
  });

  const [formData, setFormDate] = useState<FormData>({
    confirmPassword: "",
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleInputTouch(e: React.FocusEvent<HTMLInputElement>): void {
    const { name } = e.target;
    setIsTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  const validationMessages = useMemo<FormInputValidation>(() => {
    const validation: FormInputValidation = {
      name: "",
      confirmPassword: "",
      email: "",
      password: "",
      phone: "",
    };

    if (isTouched.name) {
      if (formData.name && formData.name.length > 3)
        validation.name = "✔️ Name is valid";
      else
        validation.name =
          "⚫ Name should not be empty and has at least 3 characters!";
    }

    if (isTouched.email) {
      if (IsEmailValid(formData.email)) validation.email = "✔️ Email is valid";
      else validation.email = "⚫ Enter a valid email";
    }

    if (isTouched.phone) {
      if (IsPhoneValid(formData.phone)) validation.phone = "✔️ Phone is valid";
      else validation.phone = "⚫ Enter a valid phone number";
    }

    if (isTouched.password) {
    }

    if (isTouched.confirmPassword) {
    }

    return validation;
  }, [isTouched, formData]);

  function handleSubmitBtn() {
    console.log(formData);
  }

  return (
    <div className={style.container}>
      <h2>Create New User</h2>
      <div className={style["form-group"]}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onFocus={handleInputTouch}
          onChange={handleInputChange}
          placeholder="Enter the name of the user"
        />
        <p className={style["validation-error"]}>Error</p>
      </div>
      <div className={style["form-group"]}>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onFocus={handleInputTouch}
          onChange={handleInputChange}
          name="email"
          placeholder="Enter email"
        />
      </div>
      <div className={style["form-group"]}>
        <label>Phone Number</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onFocus={handleInputTouch}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
      </div>
      <div className={style["form-group"]}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onFocus={handleInputTouch}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
      </div>
      <div className={style["form-group"]}>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          onFocus={handleInputTouch}
          placeholder="Enter password"
        />
      </div>
      <button name="submit-btn" onClick={handleSubmitBtn}>
        Create
      </button>
    </div>
  );
}
