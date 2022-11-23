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
  validateLength,
  validateLowerCase,
  validateUpperCase,
  validateSpecial,
  validateNumbers,
  validadeNumberSequence,
  validadeCharSequence,
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

  const [emailValid, setEmailValid] = React.useState<boolean>(false);
  const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
  const [passwordsMath, setPasswordsMath] = React.useState<boolean>(false);
  const [lengthIsValid, setLengthIsValid] = React.useState<boolean>(false);
  const [specialIsValid, setSpecialIsValid] = React.useState<boolean>(false);
  const [lowerIsValid, setLowerIsValid] = React.useState<boolean>(false);
  const [upperIsValid, setUpperIsValid] = React.useState<boolean>(false);
  const [numberIsValid, setNumberIsValid] = React.useState<boolean>(false);
  const [sequenceCharIsValid, setSequenceCharIsValid] =
    React.useState<boolean>(false);
  const [sequenceNumberIsValid, setSequenceNumberIsValid] =
    React.useState<boolean>(false);

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
    setPasswordsMath(inputPassword === inputConfirmPassword);
  };
  const onInputConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputConfirmPassword(e.target.value);
    setPasswordsMath(inputPassword === inputConfirmPassword);
  };

  React.useEffect(() => {
    setEmailValid(validateEmail(inputEmail));
  }, [inputEmail]);

  React.useEffect(() => {
    setPasswordsMath(inputPassword === inputConfirmPassword);
    setPasswordValid(validatePassword(inputPassword));
    setLengthIsValid(validateLength(inputPassword));
    setSpecialIsValid(validateSpecial(inputPassword));
    setLowerIsValid(validateLowerCase(inputPassword));
    setUpperIsValid(validateUpperCase(inputPassword));
    setNumberIsValid(validateNumbers(inputPassword));
    setSequenceCharIsValid(validadeCharSequence(inputPassword));
    setSequenceNumberIsValid(validadeNumberSequence(inputPassword));
  }, [inputPassword, inputConfirmPassword]);

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
              passwordValid || inputPassword === "" ? "" : "invalid password"
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
                : passwordsMath
                ? "passwords match"
                : "passwords don't match"
            }
            colorHelp={passwordsMath ? "green" : "red"}
          />

          <PasswordRulesHelper
            lenghtIsValid={lengthIsValid}
            specialCharIsValid={specialIsValid}
            upperIsValid={upperIsValid}
            lowerIsValid={lowerIsValid}
            numberIsValid={numberIsValid}
            sequenceCharIsValid={sequenceCharIsValid}
            sequenceNumberIsValid={sequenceNumberIsValid}
          />

          <Button
            disabled={
              !(
                passwordValid &&
                passwordsMath &&
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
