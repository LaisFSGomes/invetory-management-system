import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import { PagesRoutes } from "features/constants";
import React from "react";
import {
  Button,
  HelpPasswordContainer,
  LinkRegister,
  LoginContainer,
  LoginWrapper,
} from "./Register.styles";
import { validatePassword } from "utils/ValidadePassword";

export const Register: React.FC = () => {
  const [inputEmailRegister, setInputEmailRegister] = React.useState("");
  const [inputNameRegister, setInputNameRegister] = React.useState("");
  const [inputPasswordRegister, setInputPasswordRegister] = React.useState("");
  const [inputConfirmPasswordRegister, setInputConfirmPasswordRegister] =
    React.useState("");
  const [passwordsMath, setPasswordsMath] = React.useState<boolean>();
  const [passwordValid, setPasswordValid] = React.useState<boolean>(false);

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
  }, [inputPasswordRegister, inputConfirmPasswordRegister]);

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
            helpText={passwordValid ? "valid" : "no valid"}
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
          {!passwordValid && inputPasswordRegister != "" && (
            <HelpPasswordContainer>
              <Typography>Password's Rules</Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemText primary="at least one special character" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="between 8 and 18 characters" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="contain uppercase, lowercase and numbers" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="cannot have sequence of letters or numbers" />
                </ListItem>
              </List>
            </HelpPasswordContainer>
          )}
          <Button>Register</Button>
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
