import { Typography } from "@mui/material";
import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import { PagesRoutes } from "features/constants";
import React from "react";
import {
  Button,
  LinkRegister,
  LoginContainer,
  LoginWrapper,
} from "./Register.styles";
import {
  validatePassword,
  validateEmail,
} from "utils/ValidadePassword";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";
import { AlternativeLogins } from "components/AlternativeLogins";
import { PasswordRulesHelper } from "components/PasswordRulesHelper/PasswordRulesHelper";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const { RegisterUser } = React.useContext(UserContext);

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputName, setInputName] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState("");

  let passwordValid = validatePassword(inputPassword);
  let passwordMatch = (inputPassword === inputConfirmPassword);
  let emailValid = validateEmail(inputEmail);

  const onRegisterButtonClick = () => {
    if (RegisterUser(inputName, inputEmail, inputPassword)) {
      alert("Registered User!");
      navigate(PagesRoutes.login);
    }
  };
  const onInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const onInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const onInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  const onInputConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputConfirmPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <AppBarResponsive />
      <LoginWrapper>
        <LoginContainer>
          <Input
            label="Email"
            onChange={onInputEmailChange}
            value={inputEmail}
            id="email"
            type="email"
            helpText={emailValid || inputEmail === "" ? "" : "Email inválido"}
            colorHelp="red"
          />
          <Input
            label="Name"
            onChange={onInputNameChange}
            value={inputName}
            id="name"
            type="text"
          />
          <Input
            label="Password"
            onChange={onInputPasswordChange}
            value={inputPassword}
            id="password"
            type="password"
            helpText={
              (passwordValid || inputPassword === "") ? "" : "invalid password"
            }
            colorHelp="red"
          />
          <Input
            label="Confirm Password"
            onChange={onInputConfirmPasswordChange}
            value={inputConfirmPassword}
            id="password"
            type="password"
            helpText={
              inputConfirmPassword === ""
                ? ""
                : passwordMatch
                ? "passwords match"
                : "passwords don't match"
            }
            colorHelp={passwordMatch ? "green" : "red"}
          />

          <PasswordRulesHelper password = {inputPassword}/>

          <Button
            disabled={
              !(
                passwordValid &&
                passwordMatch &&
                emailValid &&
                inputName !== ""
              )
            }
            onClick={onRegisterButtonClick}
          >
            Register
          </Button>

          <AlternativeLogins message="register" />
        </LoginContainer>
        <Typography>
          Already have an account?{" "}
          <LinkRegister to={PagesRoutes.login}>Login</LinkRegister>
        </Typography>
      </LoginWrapper>
      <Footer />
    </React.Fragment>
  );
};
