import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  //console.log(action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.value.length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //TODO: Using Reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  //TODO: Object deconstructing
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  //TODO: this can prevent useffect run on every input change

  //TODO: Clean Up function
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking from validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("Clean Up");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  // //TODO: useEffect with dependancy, this will be run every time {enteredEmail, enteredPassword} have changes

  // const emailChangeHandler = (event) => {

  //   setEnteredEmail(event.target.value);
  // };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //setFormIsValid(emailState.isValid)
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid){
      emailInputRef.current.focus1();
    }
    else{
      passwordInputRef.current.focus1();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="text"
          id="text"
          label="Email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="parssword"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
