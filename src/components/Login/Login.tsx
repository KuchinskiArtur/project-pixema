import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "../../pages/Autorization/Autorization.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Path } from "../../constants/constants";
import { loginUser } from "../../redux/reducers/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RegistrationClick = () => navigate(Path.Registration);

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Required");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Required");

  const [validationForm, setValidationForm] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setValidationForm(false);
    } else {
      setValidationForm(true);
    }
  }, [emailError, passwordError]);

  const onBlurHandler = (event: any) => {
    switch (event.target.id) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const onChangeInput = (event: any) => {
    const value = event.target.value;

    switch (event.target.id) {
      case "email":
        setEmail(value);

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!value.trim()) {
          setEmailError("Required");
        } else if (!emailRegex.test(String(value).toLowerCase())) {
          setEmailError("Email entered incorrectly");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        setPassword(value);

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (!value.trim()) {
          setPasswordError("Required");
        } else if (!passwordRegex.test(String(value))) {
          setPasswordError("Password entered incorrectly");
        } else {
          setPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  const onSubmitForm = () => {
    console.log("hello");
    dispatch(
      loginUser({
        email,
        password,
        token_name: "samsung",
      })
    );
  };

  return (
    <div className="form">
      <div className="form__container">
        <span className="form__name">Sign In</span>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <Input
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            isError={emailDirty && emailError}
            value={email}
            placeholder="Your email"
            id="email"
          ></Input>
          {emailDirty && emailError && (
            <span className="form__item__error">{emailError}</span>
          )}
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <Input
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            isError={passwordDirty && passwordError}
            value={password}
            type="password"
            placeholder="Your password"
            id="password"
          ></Input>
          {passwordDirty && passwordError && (
            <span className="form__item__error">{passwordError}</span>
          )}
          <span className="form__item__help">Forgot password?</span>
        </div>
        <Button
          onClick={onSubmitForm}
          className={classNames("primary", { ["_disabled"]: !validationForm })}
          text={"Sign in"}
        ></Button>
        <p className="form__footer">
          Don’t have an account?{" "}
          <span onClick={RegistrationClick}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
