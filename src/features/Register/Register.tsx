import { Typography } from "@mui/material";
import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import { PagesRoutes } from "features/constants";
import React from "react";
import { Button, LinkRegister, LoginContainer, LoginWrapper } from "./Register.styles";

export const Register: React.FC = () => {
  const [inputEmailRegister, setInputEmailRegister] = React.useState("");
  const [inputNameRegister, setInputNameRegister] = React.useState("");
  const [inputPasswordRegister, setInputPasswordRegister] = React.useState("");
  const [inputConfirmPasswordRegister, setInputConfirmPasswordRegister] = React.useState("");
  const [passwordsMath, setPasswordsMath] = React.useState<boolean> ();

  const onInputEmailRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailRegister(e.target.value);
  };const onInputNameRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputNameRegister(e.target.value);
  };
  const onInputPasswordRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPasswordRegister(e.target.value);
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister)
  };
  const onInputConfirmPasswordRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputConfirmPasswordRegister(e.target.value);
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister)
  };
  React.useEffect(() => {
    setPasswordsMath(inputPasswordRegister === inputConfirmPasswordRegister);
  }, [inputPasswordRegister, inputConfirmPasswordRegister]);

  return(
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
        />
        <Input 
          label="Confirm Password"
          onChange={onInputConfirmPasswordRegisterChange}
          value={inputConfirmPasswordRegister}
          id="password"
          type="password"
          helpText= {passwordsMath ? "passwords math" : "passwords don't math"}
          colorHelp= {passwordsMath ? "green" : "red"}
        />
         <Button>Register</Button>
      </LoginContainer>
      <Typography>
        Already have an account? <LinkRegister to = {PagesRoutes.login}>Login</LinkRegister>
      </Typography>
    </LoginWrapper>
    <Footer />
   </React.Fragment>
  );
};