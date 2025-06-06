import { isValidElement, useState } from "react";
import Input from "./Input.jsx";
import { isEmail, hasMinLength, isNotEmpty } from "../validcation/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const { value: emailValue, handleInputBlur: handleEmailBlure, handleInputChange: handleEmailChange, hasError: emailError } = useInput("", isEmail);

  const { value: passwordValue, handleInputBlur: handlePasswordBlure, handleInputChange: handlePasswordChange, hasError: passwordError } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted!");
    console.log(enterdValue);

  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input
          label={"Email"}
          error={emailError && "Please Enter a Valid Email"}
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlure} />

        <Input
          label={"Password"}
          id="password"
          error={passwordError && "Password at least should have 6 charaters"}
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlure} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
