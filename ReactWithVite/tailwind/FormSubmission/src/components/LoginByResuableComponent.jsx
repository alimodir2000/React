import { isValidElement, useState } from "react";
import Input from "./Input";
import {isEmail, hasMinLength, isNotEmpty} from "../validcation/validation.js"

export default function Login() {

  const [enterdValue, setEnteredValue] = useState({
    email: "",
    password: ""

  });

  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false
  });

  function handleInputChange(identifier, value) {
    setEnteredValue((prev) => ({
      ...prev,
      [identifier]: value
    }));
  }

  function handleInputBlur(identifier) {
    setIsEdited((prev) => ({
      ...prev,
      [identifier]: true
    }))
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted!");
    console.log(enterdValue);

  }

  
  const isEmailInvalid = isEdited.email && (!isEmail(enterdValue.email) || !isNotEmpty(enterdValue.email))
  const isPasswordInvalid  = isEdited.password && !hasMinLength(enterdValue.password,6)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input
          label={"Email"}
          error={isEmailInvalid && "Please Enter a Valid Email!"}          
          id="email"
          type="email"
          name="email"
          value={enterdValue.email}
          onChange={(event) => { handleInputChange("email", event.target.value) }}
          onBlur={() => { handleInputBlur("email") }} />
        
          <Input
            label={"Password"}
            id="password"
            error={isPasswordInvalid && "Password should have at least 6 characters!"}
            type="password"
            name="password"
            value={enterdValue.password}
            onChange={(event) => { handleInputChange("password", event.target.value) }}
            onBlur={() => { handleInputBlur("password") }} />        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
