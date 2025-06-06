import { isValidElement, useState } from "react";

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted!");
    console.log(enterdValue);

  }

  function handleInputBlur(identifier) {
    setIsEdited((prev) => ({
      ...prev,
      [identifier]: true
    }))
  }

  const isEmailInvalid = isEdited.email && !enterdValue.email.includes("@");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enterdValue.email}
            onChange={(event) => { handleInputChange("email", event.target.value) }}
            onBlur={() => { handleInputBlur("email") }} />
        </div>
        {
          isEmailInvalid && <p>Please Enter a valid email!</p>
        }

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enterdValue.password}
            onChange={(event) => { handleInputChange("password", event.target.value) }}
            onBlur={() => { handleInputBlur("password") }} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
