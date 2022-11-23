import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import { PagesRoutes } from "features/constants";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import React from "react";
import {
  Button,
  HelpPasswordContainer,
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
  validadeSequence,
} from "utils/ValidadePassword";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";

interface user {
  name: string;
  email: string;
  password: string;
};

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [inputEmailRegister, setInputEmailRegister] = React.useState("");
  const [inputNameRegister, setInputNameRegister] = React.useState("");
  const [inputPasswordRegister, setInputPasswordRegister] = React.useState("");
  const [inputConfirmPasswordRegister, setInputConfirmPasswordRegister] =
    React.useState("");
  const [emailValid, setEmailValid] = React.useState<boolean>(false);
  const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
  const [passwordsMath, setPasswordsMath] = React.useState<boolean>(false);
  const [lengthIsValid, setLengthIsValid] = React.useState<boolean>(false);
  const [specialCharIsValid, setSpecialCharIsValid] =
    React.useState<boolean>(false);
  const [lowerUpperNumberIsValid, setLowerUpperNumberIsValid] =
    React.useState<boolean>(false);
  const [sequenceIsValid, setSequenceIsValid] = React.useState<boolean>(false);

  const { RegisterUser, users } = React.useContext(UserContext);
  const onRegisterButtonClick = () => {
    if(RegisterUser(inputNameRegister, inputEmailRegister, inputPasswordRegister)){
      alert("Registered User!");
      navigate(PagesRoutes.login);
    }
  };

  const onInputEmailRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputEmailRegister(e.target.value);
  };
  const onInputNameRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputNameRegister(e.target.value);
  };
  const onInputPasswordRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputPasswordRegister(e.target.value);
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister);
  };
  const onInputConfirmPasswordRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputConfirmPasswordRegister(e.target.value);
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister);
  };
  React.useEffect(() => {
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister);
    setPasswordValid(validatePassword(inputPasswordRegister));
    setEmailValid(validateEmail(inputEmailRegister));
    setLengthIsValid(validateLength(inputPasswordRegister));
    setSpecialCharIsValid(validateSpecial(inputPasswordRegister));
    setLowerUpperNumberIsValid(
      validateLowerCase(inputPasswordRegister) &&
        validateUpperCase(inputPasswordRegister) &&
        validateNumbers(inputPasswordRegister),
    );
    setSequenceIsValid(validadeSequence(inputPasswordRegister));
  }, [inputPasswordRegister, inputConfirmPasswordRegister, inputEmailRegister]);

  return (
    <React.Fragment>
      <AppBarResponsive />
      <LoginWrapper>
        <LoginContainer>
          <Input
            label="Email"
            onChange={onInputEmailRegisterChange}
            value={inputEmailRegister}
            id="email"
            type="email"
            helpText={
              (emailValid || inputEmailRegister==="") ? "" : "invalid email"
            }
            colorHelp="red"
          />
          <Input
            label="Name"
            onChange={onInputNameRegisterChange}
            value={inputNameRegister}
            id="name"
            type="text"
          />
          <Input
            label="Password"
            onChange={onInputPasswordRegisterChange}
            value={inputPasswordRegister}
            id="password"
            type="password"
            helpText={
              passwordValid || inputPasswordRegister === ""
                ? ""
                : "invalid password"
            }
            colorHelp="red"
          />
          <Input
            label="Confirm Password"
            onChange={onInputConfirmPasswordRegisterChange}
            value={inputConfirmPasswordRegister}
            id="password"
            type="password"
            helpText={
              inputConfirmPasswordRegister === ""
                ? ""
                : passwordsMath
                ? "passwords match"
                : "passwords don't match"
            }
            colorHelp={passwordsMath ? "green" : "red"}
          />

          <HelpPasswordContainer>
            <Typography>Password's Rules</Typography>
            <List>
              <ListItem
                disablePadding
                className={lengthIsValid ? "right" : "wrong"}
              >
                <ListItemIcon className={lengthIsValid ? "right" : "wrong"}>
                  {lengthIsValid ? (
                    <CheckCircleRoundedIcon />
                  ) : (
                    <CancelRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="between 8 and 18 characters" />
              </ListItem>

              <ListItem
                disablePadding
                className={specialCharIsValid ? "right" : "wrong"}
              >
                <ListItemIcon
                  className={specialCharIsValid ? "right" : "wrong"}
                >
                  {specialCharIsValid ? (
                    <CheckCircleRoundedIcon />
                  ) : (
                    <CancelRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="at least one special character" />
              </ListItem>

              <ListItem
                disablePadding
                className={ lowerUpperNumberIsValid ?  "right" : "wrong"}
              >
                <ListItemIcon className={lowerUpperNumberIsValid ? "right" : "wrong"}>
                {lowerUpperNumberIsValid ? (
                    <CheckCircleRoundedIcon />
                  ) : (
                    <CancelRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="contain uppercase, lowercase and numbers" />
              </ListItem>

              <ListItem
                disablePadding
                className={ sequenceIsValid ?  "right" : "wrong" }>
                <ListItemIcon className={sequenceIsValid ? "right" : "wrong"}>
                {sequenceIsValid ? (
                    <CheckCircleRoundedIcon />
                  ) : (
                    <CancelRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="cannot have letters or numbers in sequence" />
              </ListItem>
            </List>
          </HelpPasswordContainer>

          <Button disabled={!(passwordValid && passwordsMath)} onClick={onRegisterButtonClick}>Register</Button>
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
